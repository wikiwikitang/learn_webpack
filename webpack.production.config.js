const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "" //need check later
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/, //need check later
        use: ["file-loader"]
      },
      {
        test: /\.css$/, //need check later
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/, //need check later
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: "src/index.hbs",
      description: "Some description"
    })
  ]
};
