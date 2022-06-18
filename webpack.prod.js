const path = require("path");
(webpack = require("webpack")),
  (HtmlWebPackPlugin = require("html-webpack-plugin")),
  (MiniCssExtractPlugin = require("mini-css-extract-plugin")),
  (CleanWebpackPlugin = require("clean-webpack-plugin")),
  (CssMinimizerPlugin = require("css-minimizer-webpack-plugin")),
  (TerserPlugin = require("terser-webpack-plugin")),
  (WorkboxPlugin = require("workbox-webpack-plugin"));

module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  output: {
    libraryTarget: "var",
    library: "Client",
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: "assets/icons/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new WorkboxPlugin.GenerateSW(),
  ],
};
