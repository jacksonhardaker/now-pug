const pug = require('pug'),
  path = require("path"),
  fs = require("fs");

const VIEWS_DIR = path.join(__dirname, "..", "dist", "views");

module.exports = async (req, res) => {

  const template = fs.readFileSync(path.join(VIEWS_DIR, "page.pug"), "utf8");
  console.log(template);
  const render = pug.compile(template);
  const response = render({ title: "Home" });
  console.log(response);

  res.status(200).send(response);
};
