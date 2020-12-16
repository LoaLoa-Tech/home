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
router.get("/next/:category", (req, res) => {
  res.render("pages/posts", {
    categories: getCategories("docs", "next", req.params.post),
  });
});
router.get("/next/:category/:post", (req, res) => {
  var content = fs.readFileSync(
    path.join(
      __dirname,
      "../docs/next",
      req.params.category,
      req.params.post + ".md"
    ),
    { encoding: "utf-8" }
  );

  res.render("pages/post", {
    content: md.render(content),
    categories: getCategories("docs", "next", req.params.post),
    title: req.params.post,
  });
});
router.get("/price", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
