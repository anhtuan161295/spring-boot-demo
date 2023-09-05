'use strict';

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const ROOT_DIR = path.resolve(__dirname, './');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const BUILD_DIR = path.resolve(ROOT_DIR, 'build');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

let pathsToClean = ['dist', 'build'];
let cleanOptions = { root: __dirname, exclude: ['shared.js'], verbose: true, dry: false };

module.exports = {
  entry: './src/index.js',
  // entry: { main: glob.sync('./src/**/*.js*') },
  output: {
    path: DIST_DIR,
    publicPath: "",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader', options: { presets: ['env'] } }]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'resolve-url-loader' }
      //   ]
      // },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'pug-html-loader' }
        ]
      },
      // Image
      {
        test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 100000 } },
          { loader: "img-loader" }
        ]
      },
      // Font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          { loader: 'url-loader', options: { limit: 100000 } }
        ]
      },
      // Html
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader", options: { minimize: true } }
        ]
      }

    ]
  },
  resolve: {
    extensions: ['css', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    })

  ]

};

