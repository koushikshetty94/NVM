var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressStaticGzip = require("express-static-gzip");
var mongoose = require("mongoose");
var cors = require('cors');
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users/index");
var adminsRouter = require("./routes/admins/index");

var Admin = require("./models/admin");

require("dotenv").config();

var app = express();
app.use(cors());

const gzipOptions = {
  enableBrotli: true,
  orderPreference: ["br", "gz"],
  setHeaders: function(res, path) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
  }
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/bundle",
  expressStaticGzip(path.join(__dirname, "dist/bundle"), gzipOptions)
);

// Webpack Configuration
if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  const compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

mongoose.connect(
  "mongodb://localhost/NVM1",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log("connected", err ? false : true);
    Admin.findOne({ username: "admin" }, (err, admin) => {
      if (err) return console.log(err);
      if (admin) return console.log(admin, "admin found");
      if (!admin) {
        Admin.create(
          { username: "admin", password: "iamadmin" },
          (err, admin) => {
            console.log(admin, "admin created");
          }
        );
      }
    });
  }
);

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/admins", adminsRouter);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
