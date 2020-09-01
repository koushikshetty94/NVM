const { check, validationResult } = require("express-validator");

exports.validateUsersSignup = () => {
    return [
      check("username").notEmpty(),
      check("password").isLength({ min: 6 }),
      // check("firstName").notEmpty(),
      // check("lastName").notEmpty(),
      // check("contactNumber").notEmpty(),
      // check("gender").notEmpty(),
      // check("dob").notEmpty(),
    ];
  };


exports.validateLogin = () => {
    return [check("username").notEmpty(), check("password").isLength({ min: 6 })];
  };