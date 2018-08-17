const path = require('path');

module.exports = {
  entry: "./app/assets/js/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: "App.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
