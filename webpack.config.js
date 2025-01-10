const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle_[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        type: "asset",
        generator: {
          filename: "[name]_[contenthash][ext]",
          outputPath: "images/",
          publicPath: "images/",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      { test: /\.(js|jsx|ts|tsx)$/, use: ["babel-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash].css",
    }),
  ],
};
