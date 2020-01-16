const { join } = require("path");
const app = require("express")();
const md = require('markdown-it')({
  html: true
});

app.set("views", join(__dirname, "..", "views"));
app.set("view engine", "pug");

app.get("/express", (req, res) => {
  res.render("page", {
    title: "Express",
    filters: {
      "markdown-it": (text, options) => {
        return md.render(text);
      }
    }
  });
});

module.exports = app;
