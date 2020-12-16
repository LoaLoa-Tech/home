var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
const { Remarkable } = require("remarkable");
var md = new Remarkable("full", { breakes: true, html: true });
var getCategories = require("../models/bo/getCategories");
router.get("/", (req, res) => {
  res.render("pages/index");
});
router.get("/keystone/:category", (req, res) => {
  res.render("pages/posts", {
    categories: getCategories("docs", "keystone", req.params.post),
  });
});
router.get("/keystone/:category/:post", (req, res) => {
  var content = fs.readFileSync(
    path.join(
      __dirname,
      "../docs/keystone",
      req.params.category,
      req.params.post + ".md"
    ),
    { encoding: "utf-8" }
  );

  res.render("pages/post", {
    content: md.render(content),
    categories: getCategories("docs", "keystone", req.params.post),
    title: req.params.post,
  });
});
router.get("/price", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
