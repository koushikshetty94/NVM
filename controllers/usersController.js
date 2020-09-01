var User = require("../models/users");
var auth = require("../modules/auth");
const { check, validationResult } = require("express-validator");

module.exports = {
  signUp: async (req, res) => {
    try {
      console.log("hit");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      var user = await User.create(req.body);
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