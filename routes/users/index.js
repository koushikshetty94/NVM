var express = require("express");
var router = express.Router();
var users = require("../../controllers/usersController");
var auth = require("../../modules/auth");
var middlewares = require("../../modules/middlewares");


// signup route
router.post("/register",users.signUp);

/* login User. */
router.post("/login", users.login);

// Details of current logged in user
router.get("/me", auth.verifyToken, users.getCurrentUser);


module.exports = router;