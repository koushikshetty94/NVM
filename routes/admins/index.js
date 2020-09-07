var express = require("express");
var router = express.Router();
var users = require("../../controllers/usersController");
var auth = require("../../modules/auth");
var middlewares = require("../../modules/middlewares");
const path = require("path");
const shortid = require("shortid");
const Razorpay = require("razorpay");
var User = require("../../models/users");
var Admin = require("../../models/admin");

router.post("/", async (req, res) => {
  try {
    console.log(req.body, "req body");
    var admin = await Admin.findOne({ username: req.body.username });
    if (!admin) {
      return res.json({ success: false, msg: "incorrect username" });
    }
    if (admin.verifyPassword(req.body.password)) {
      return res.json({ success: false, msg: "incorrect password" });
    }
    var token = await auth.generateJWT(admin);
    console.log(token, "token from admin");
    res.json({ success: true, token });
  } catch (err) {
    console.log(err, "err");
    return res.json({ success: false, err });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.body, "req body");
    var admin = await Admin.findOne({ username: "admin" })
      .populate({
        path: "requests"
      })
      .select("-password");
    console.log(admin, "get admin");
    res.json({ success: true, admin });
  } catch (err) {
    console.log(err, "err");
    return res.json({ success: false, err });
  }
});

module.exports = router;
