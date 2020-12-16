var express = require("express");

var router = express.Router();
var { SitemapStream, streamToPromise } = require("sitemap");
var { createGzip } = require("zlib");

var getCategories = require("../models/bo/getCategories");
var getTree = require("../models/bo/getTree");
var sitemap;
router.get("/sitemap.xml", function (req, res) {
  res.header("Content-Type", "application/xml");
  res.header("Content-Encoding", "gzip");
  if (sitemap) {
    res.send(sitemap);
    return;
  }

  try {
    const smStream = new SitemapStream({ hostname: "https://loaloa.tech/" });
    const pipeline = smStream.pipe(createGzip());
    smStream.write({ url: "/" });
    smStream.write({ url: "/standard" });
    smStream.write({ url: "/projects" });
    var blogs = getTree("blogs", null);
    var docs = getTree();
    
    blogs.map((platform) => {
      platform.categories.map((category) => {
        smStream.write({ url: category.url });
        category.posts.map((item) => {
          smStream.write({ url: item.url });
        });
      });
    });

    docs.map((platform) => {
      platform.categories.map((category) => {
        smStream.write({ url: category.url });
        category.posts.map((item) => {
          smStream.write({ url: item.url });
        });
      });
    });

    streamToPromise(pipeline).then((sm) => (sitemap = sm));
    smStream.end();
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});
module.exports = router;
