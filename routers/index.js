var express = require("express");
var getPlatforms = require("../models/bo/getPlatforms");
const getTree = require("../models/bo/getTree");
var router = express.Router();
router.get("/", (req, res) => {
  res.render("pages/index");
});
router.get("/standard", (req, res) => {
  res.render("pages/standard");
});
router.get("/projects", (req, res) => {
  res.render("pages/projects");
});
router.get("/docs", (req, res) => {
  res.render("pages/docs", { tree: getTree() });
});
router.get("/blogs", (req, res) => {
  res.render("pages/docs", { tree: getTree("blogs", null) });
});
module.exports = router;
