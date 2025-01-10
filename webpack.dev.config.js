const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const { DefinePlugin } = require("webpack");
const { maxHeaderSize } = require("http");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: "3000",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        type: "asset",
        generator: {
          outputPath: "images/",
          publicPath: "images/",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      { test: /\.(js|jsx|ts|tsx)$/, use: ["babel-loader"] },
    ],
  },

  plugins: [
    new DotEnv({ path: "./.env.dev" }), //only the variables from env file
    new DefinePlugin({
      "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL), // dynamic variabels from scripts
    }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
