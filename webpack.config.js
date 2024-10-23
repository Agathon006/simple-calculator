"use strict";

export const mode = "production";
export const entry = "./src/scripts/index.js";
export const output = {
  filename: "bundle.js",
  path: __dirname + "/build",
};
export const watch = true;
export const devtool = "source-map";
export const devServer = {
  static: "./",
};
export const module = {};
