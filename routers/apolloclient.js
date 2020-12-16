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
router.get("/apolloclient/:category", (req, res) => {
  res.render("pages/posts", {
    categories: getCategories("docs", "apolloclient", req.params.post),
  });
});
router.get("/apolloclient/:category/:post", (req, res) => {
  var content;
  try {
    content = fs.readFileSync(
      path.join(
        __dirname,
        "../docs/apolloclient",
        req.params.category,
        req.params.post + ".md"
      ),
      { encoding: "utf-8" }
    );
  } catch {
    content = fs.readFileSync(
      path.join(
        __dirname,
        "../docs/apolloclient",
        req.params.category,
        req.params.post + ".mdx"
      ),
      { encoding: "utf-8" }
    );
  }

  res.render("pages/post", {
    content: md.render(content),
    categories: getCategories("docs", "apolloclient", req.params.post),
    title: req.params.post,
  });
});
router.get("/price", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
