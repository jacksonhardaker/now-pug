const express = require('express'),
  path = require("path"),
  app = express();

app.set("views", path.join(__dirname, "../../", "/views/"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("page", { title: "Home" });
});

module.exports = app;
