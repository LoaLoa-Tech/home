var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
const { Remarkable } = require("remarkable");
var md = new Remarkable("full", { breakes: true, html: true });
var getCategories = require("../models/bo/getCategories");

router.get("/:blog/:category", (req, res) => {
  res.render("pages/posts", {
    categories: getCategories("blogs", req.params.blog, null),
  });
});
router.get("/:blog/:category/:post", (req, res) => {
  var content = fs.readFileSync(
    path.join(
      __dirname,
      "../blogs",
      req.params.blog,
      req.params.category,
      req.params.post + ".md"
    ),
    { encoding: "utf-8" }
  );

  res.render("pages/post", {
    content: md.render(content),
    categories: getCategories("blogs", req.params.blog, null),
    title: req.params.post,
  });
});

module.exports = router;
