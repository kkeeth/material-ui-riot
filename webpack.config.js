const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("styles/riot-mui.min.css");

const plugins = [new webpack.optimize.OccurrenceOrderPlugin(), extractSass];

module.exports = {
  entry: {
    "riot-mui": "./src/index",
    "riot-mui-min": "./src/index",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "js/[name].js",
  },
  target: "node",
  plugins: plugins,
  devtool: "inline",
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "@riotjs/webpack-loader",
            options: {
              hot: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              query: {
                minimize: true,
              },
            },
            "sass-loader",
          ],
        }),
      },
    ],
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    inline: true,
  },
};
