'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const PARENT_DIR = path.resolve(__dirname, '../');
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
  // Development config
  mode: 'development',
  devServer: {
    hot: true
  },
  devtool: 'source-map',

  entry: {
    app: './src/index.js',
  },
  output: {
    path: DIST_DIR,
    publicPath: "",
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()

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
          output: { beautify: false },
        }
      }),


    ]
  }

});