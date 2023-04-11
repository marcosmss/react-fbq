const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./demo/index.jsx"],
  output: {
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts|\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./demo/index.html" }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "demo"), "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    historyApiFallback: true,
    compress: false,
    host: process.env.IP || "0.0.0.0",
    port: parseInt(process.env.PORT, 10) || 4000,
  },
};
