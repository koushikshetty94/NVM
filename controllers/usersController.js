var User = require("../models/users");
var auth = require("../modules/auth");
const { check, validationResult } = require("express-validator");
var voucher_codes = require("voucher-code-generator");

function generateVoucher() {
  return (voucher = voucher_codes.generate({
    prefix: "NVM",
    length: 5,
    count: 1
  }));
}
module.exports = {
  signUp: async (req, res) => {
    try {
      req.body.referalcode = generateVoucher();
      console.log(req.body.referalcode);
      console.log("hit");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      var referedBy = req.body.referalcode
        ? await User.findOne({ referalcode: req.body.referedBy })
        : "";
      if (!referedBy) {
        return res.json({ success: false, msg: "invalid referal code" });
      }

      req.body.referedBy = referedBy.id;
      var user = await User.create(req.body);
      var updateReferer = await User.findByIdAndUpdate(referedBy.id, {
        $push: { referredUsers: user.id }
      });
      var token = await auth.generateJWT(user);
      let { name, username, password, contactNumber } = user;
      res.json({
        success: true,
        user: {
          name,
          username,
          contactNumber
        },
        token
      });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  },
  login: async (req, res) => {
    try {
      console.log("login hit");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      var user = await User.findOne({ username: req.body.username }).lean({
        virtuals: true
      });
      if (!user)
        return res.json({ success: false, msg: "incorrect credentials" });
      if (!user.verifyPassword(req.body.password)) {
        return res.json({ success: false, msg: "incorrect password" });
      }
      var token = await auth.generateJWT(user);
      delete user["password"];
      res.json({ success: true, user, token });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  },
  getCurrentUser: async (req, res) => {
    try {
      var user = await User.findById(req.user.userId).select("-password");
      res.json({ success: true, user });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  }
};
