const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: "3006",
    hot: true,
    compress: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    },
    proxy: {
      "/api": {
        target: "http://localhost:3009",
        changeOrigin: true
      }
    }
  }
};
