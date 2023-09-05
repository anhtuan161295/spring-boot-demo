'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const ROOT_DIR = path.resolve(__dirname, './');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const BUILD_DIR = path.resolve(ROOT_DIR, 'build');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const OfflinePlugin = require('offline-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: DIST_DIR,
    publicPath: "",
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].bundle.css",
      chunkFilename: '[id].[hash].bundle.css',
    }),

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
        sourceMap: false, // set to true if you want JS source maps
        uglifyOptions: {
          output: { beautify: false },
        }
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })

    ]
  }

});