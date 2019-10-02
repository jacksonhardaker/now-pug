// const config = require("./config");

const presets = [
  ["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }],
];

const plugins = [
  // "@babel/plugin-proposal-class-properties",
  // "@babel/plugin-transform-template-literals",
  // "@babel/plugin-syntax-dynamic-import",
  // "@babel/plugin-transform-classes"
];

module.exports = { presets, plugins };
