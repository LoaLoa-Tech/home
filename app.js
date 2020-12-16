var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
app.engine(".html", require("ejs").__express);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
/**
 * Routers
 */
app.use(require("./routers/keystone"));
app.use(require("./routers/apolloclient"));
app.use(require("./routers/next"));
app.use(require("./routers/react"));
app.use(require("./routers/index"));
app.use(require("./routers/blog"));
app.use(require("./routers/sitemap"));

/**
 * Listen
 */
app.listen(3000);

