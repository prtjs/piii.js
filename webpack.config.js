"use strict";

const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");

const banner = `Piii.js v${pkg.version}
(c) 2016-${(new Date).getFullYear()} Matheus Alves
License: MIT`;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "piii.js",
    path: path.resolve(__dirname, "dist"),
    library: "Piii",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {presets: ["env"]}
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin(banner)
  ]
};
