const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const enabledSourceMap = argv.mode || "development";

  return {
    entry: {
      "riot-mui": [
        "./src/index",
        "./node_modules/ress/ress.css"
      ],
      "riot-mui-min": [
        "./src/index",
        "./node_modules/ress/ress.css"
      ]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/build/",
      filename: "js/[name].js",
      libraryTarget: "umd"
    },
    devtool: "inline",
    target: "node",
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "async",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
        automaticNameDelimiter: "~",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.riot$/,
          exclude: /node_modules/,
          use: [{
            loader: "@riotjs/webpack-loader",
            options: {
              hot: true
            }
          }]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader",
            options: {
              sourceMap: false
            }
          }],
        },
        {
          test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: true,
                sourceMap: enabledSourceMap
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: enabledSourceMap
              }
            }
          ]
        }
      ],
    },
    devServer: {
      open: true,
      contentBase: "./",
      historyApiFallback: {
        index: "index.html"
      },
      hot: true
    }
  };
};
