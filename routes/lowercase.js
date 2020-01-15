const url = require("url");

module.exports = async (req, res) => {
  const { pathname, search, hash } = url.parse(req.url);
  // const redirectUrl = `${pathname}/${search || ""}${hash || ""}`;
  // res.setHeader("Location", redirectUrl);
  res.status(200).send(`Lowercase - ${req.url}`);
};
