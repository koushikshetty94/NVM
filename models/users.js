var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");
const mongooseLeanGetters = require("mongoose-lean-getters");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
var voucher_codes = require("voucher-code-generator");

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    contactnumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    referalcode: {
      type: Array,
      default: 0,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.password && this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

userSchema.virtual("verifyPassword").get(function () {
  return function (password) {
    return bcrypt.compareSync(password, this.password);
  };
});

userSchema.plugin(mongooseLeanVirtuals);

module.exports = mongoose.model("User", userSchema);
