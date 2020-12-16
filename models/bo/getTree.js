var fs = require("fs");
var path = require("path");

module.exports = (data = "docs", current) => {
  //
  var platforms = [];
  fs.readdirSync(path.join(__dirname, "../../", data)).map((filePlatform) => {
    var platform = path.parse(filePlatform);
    if (platform.ext != ".md" && platform.ext != ".mdx") {
      //
      var categories = [];
      fs.readdirSync(path.join(__dirname, "../../", data, platform.name)).map(
        (fileCategory) => {
          var category = path.parse(fileCategory);
          if (category.ext != ".md" && category.ext != ".mdx") {
            //
            var posts = [];
            fs.readdirSync(
              path.join(__dirname, "../../", data, platform.name, category.name)
            ).map((filePost) => {
              //
              var post = path.parse(filePost);
              if (post.ext == ".md" || post.ext == ".mdx")
                posts.push({
                  url: path.join("/", platform.name, category.name, post.name),
                  name: post.name.replace(/-/g, " "),
                  isActive: current == post.name,
                });
            });
            categories.push({
              name: category.name.replace(/-/g, " "),
              url: path.join("/", platform.name, category.name),
              posts,
            });
          }
        }
      );
      platforms.push({
        name: platform.name.replace(/-/g, " "),
        url: path.join("/", platform.name),
        categories,
      });
    }
  });
  return platforms;
};
