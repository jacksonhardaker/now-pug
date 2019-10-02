const pug = require('pug');
const path = require("path");
const fs = require("fs");

const VIEWS_DIR = path.join(__dirname, "..", "views");

module.exports = async (req, res) => {
  const render = pug.compileFile(path.join(VIEWS_DIR, "page.pug"));
  const response = render({ title: "Home", text: "some text" });

  res.status(200).send(response);
};
