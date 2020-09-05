var express = require("express");
var router = express.Router();
var users = require("../../controllers/usersController");
var auth = require("../../modules/auth");
var middlewares = require("../../modules/middlewares");
const path = require("path");
const shortid = require("shortid");
const Razorpay = require("razorpay");
var User = require("../../models/users");

const razorpay = new Razorpay({
  // key_id: "rzp_test_uGoq5ABJztRAhk",
  // key_id: "rzp_test_rY1XQ0DedceJoN",
  key_id: "rzp_live_s0He37vgdGkYPE",
  // key_secret: "FySe2f5fie9hij1a5s6clk9B",
  // key_secret: "LK5x1goCCVBoSkInFSwgSKsj"
  key_secret: "HVZsjKtlnO4MhIHIB3Dvamce"
});

// signup route
router.post("/register", users.signUp);

/* login User. */
router.post("/login", users.login);

// Details of current logged in user
router.get("/me", auth.verifyToken, users.getCurrentUser);

router.post("/verification", auth.verifyToken, (req, res) => {
  // do a validation
  const secret = "12345678";

  console.log(req.body);

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  } else {
    // pass it
  }
  res.json({ status: "ok" });
});

router.post("/razorpay", auth.verifyToken, async (req, res) => {
  console.log(req.body.amount, "its a amount");
  const payment_capture = 1;
  const amount = 1;
  const currency = "INR";

  const options = {
    amount: req.body.amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/paymentdone", auth.verifyToken, async (req, res) => {
  try {
    var user = await User.findByIdAndUpdate(req.user.userId, {
      $push: { purchases: req.body.items }
    });
    console.log(user, req.body, "user");

    res.json({
      success: true,
      msg: "Paymnet successfull",
      itemsBought: req.body.items
    });
  } catch (err) {
    console.log(err, "error");
    res.json({ success: false, err });
  }
});

module.exports = router;
