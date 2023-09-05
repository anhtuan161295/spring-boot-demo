'use strict';

const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

let pathsToClean = ['dist', 'build'];
let cleanOptions = { root: __dirname, exclude: ['shared.js'], verbose: true, dry: false };

module.exports = {
  entry: './src/index.js',
  // entry: { main: glob.sync('./src/**/*.js*') },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: ['jshint-loader']
      // },
      { test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components)/, use: [{ loader: 'babel-loader', options: { presets: ['env'] } }] },
      { test: /\.css$/, exclude: /(node_modules|bower_components)/, use: ['style-loader', 'css-loader'] },
      // { test: /\.svg$/, use: ['svg-inline-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.pug$/, use: ["html-loader", "pug-html-loader"] },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/i, use: [{ loader: 'url-loader', options: { name: "./img/[name].[ext]", limit: 100000 } }, { loader: "img-loader" }] },
      { test: /\.html$/, use: [{ loader: "html-loader", options: { minimize: true } }] }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};

