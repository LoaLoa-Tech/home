var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
const { Remarkable } = require("remarkable");
var md = new Remarkable("full", { breakes: true, html: true });
var getCategories = require("../models/bo/getCategories");

router.get("/:blog/:category", (req, res) => {
  var categories;
  try {
    categories = getCategories("blogs", req.params.blog, null);
  } catch {
    categories = getCategories("SEO", req.params.blog, null);
  }
  res.render("pages/posts", {
    categories,
  });
});
router.get("/:blog/:category/:post", (req, res) => {
  var content;
  var categories;
  try {
    content = fs.readFileSync(
      path.join(
        __dirname,
        "../blogs",
        req.params.blog,
        req.params.category,
        req.params.post + ".md"
      ),
      { encoding: "utf-8" }
    );
    categories = getCategories("blogs", req.params.blog, null);
  } catch {
    content = fs.readFileSync(
      path.join(
        __dirname,
        "../SEO",
        req.params.blog,
        req.params.category,
        req.params.post + ".md"
      ),
      { encoding: "utf-8" }
    );
    categories = getCategories("SEO", req.params.blog, null);
  }
  res.render("pages/post", {
    content: md.render(content),
    categories,
    title: req.params.post,
  });
});

module.exports = router;
