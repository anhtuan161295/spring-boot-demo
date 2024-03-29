"use strict";

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

const PARENT_DIR = path.resolve(__dirname, "../");
const ROOT_DIR = path.resolve(__dirname, "./");
const DIST_DIR = path.resolve(ROOT_DIR, "dist");
const BUILD_DIR = path.resolve(ROOT_DIR, "build");
const SRC_DIR = path.resolve(ROOT_DIR, "src");

const BACKEND_RES_DIR = PARENT_DIR + "/backend/src/main/resources";
const BACKEND_STATIC_DIR = PARENT_DIR + "/backend/src/main/resources/static";

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  // Development config
  mode: "development",
  devServer: {
    hot: true,
    contentBase: BACKEND_STATIC_DIR,
    publicPath: "",
    // port: 3000,
    // host: 'localhost',
    //Be possible go back pressing the "back" button at chrome
    historyApiFallback: true,
    progress: true,
    watchContentBase: true
  },

  devtool: "source-map",

  entry: {
    app: "./src/index.js"
  },
  output: {
    path: BACKEND_STATIC_DIR,
    publicPath: "",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader" },
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].bundle.css"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        uglifyOptions: {
          output: { beautify: false }
        }
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ]
  }
});
