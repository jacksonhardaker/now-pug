module.exports = {
  testPathIgnorePatterns: ["webpack", "cypress"],
  collectCoverageFrom: [
    "./**/*.js",
  ],
  globals: {
    window: true,
    document: true
  },
  coveragePathIgnorePatterns: ["./cypress", "./dist", "./node_modules", ".config.js", "./express", "./webpack", "./bin"],
  transformIgnorePatterns: ["/node_modules/(?!@tuftandneedle*)"], // Allow babel to ONLY transpile the node_modules @tuftandneedle
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFiles: ["<rootDir>/setup-jest.js"]
};
