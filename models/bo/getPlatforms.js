var fs = require("fs");
var path = require("path");

module.exports = (data) => {
  var platforms = [];
  fs.readdirSync(path.join(__dirname, "../../", data)).map((file) => {
    if (path.extname(file) != ".md" && path.extname(file) != ".mdx") {
      var categories = [];
      fs.readdirSync(path.join(__dirname, "../../", data, file)).map((item) => {
        var { name } = path.parse(item);
        if (path.extname(item) != ".md" && path.extname(item) != ".mdx")
          categories.push({
            url: path.join("/", file, name),
            name: name.replace(/-/g, " ").replace(/\b./g, function (m) {
              return m.toUpperCase();
            }),
          });
      });
      platforms.push({
        name: file.replace(/-/g, " ").replace(/\b./g, function (m) {
          return m.toUpperCase();
        }),
        url: path.join("/", file),
        categories,
      });
    }
  });
  return platforms;
};
