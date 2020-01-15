const pug = require('pug');
const path = require("path");
const fs = require("fs");
const md = require('markdown-it')({
  html: true
});

const VIEWS_DIR = path.join(__dirname, "..", "views");

const options = {
  filters: {
    "markdown-it": (text, options) => {
      return md.render(text);
    }
  }
};

module.exports = async (req, res) => {
  const render = pug.compileFile(path.join(VIEWS_DIR, "page.pug"), options);
  const response = render({ title: "Home", text: "some text" });

  res.status(200).send(response);
};
