var fs = require("fs");
var path = require("path");

module.exports = (data = "blogs", platform, current) => {
  var categories = [];
  fs.readdirSync(path.join(__dirname, "../../", data, platform)).map((file) => {
    if (path.extname(file) != ".md" && path.extname(file) != ".mdx") {
      var items = [];
      fs.readdirSync(path.join(__dirname, "../../", data, platform, file)).map(
        (item) => {
          var { name } = path.parse(item);
          if (path.extname(item) == ".md" || path.extname(item) == ".mdx")
            items.push({
              url: path.join("/", platform, file, name),
              name: name.replace(/-/g, " ").replace(/\b./g, function (m) {
                return m.toUpperCase();
              }),
              isActive: current == name,
            });
        }
      );
      categories.push({
        name: file.replace(/-/g, " ").replace(/\b./g, function (m) {
          return m.toUpperCase();
        }),
        url: path.join("/", platform, file),
        items,
      });
    }
  });
  return categories;
};
