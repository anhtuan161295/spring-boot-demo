Lỗi globalconfig, cứ chạy npm install là tạo folder etc
npm config -g get globalconfig
npm config -g set globalconfig
vào C:\Users\QQ xóa .npmrc

React
npm install --save-dev react react-dom react-scripts react-router

// React utils to remove %PUBLIC_URL%
npm i -D react-dev-utils

npm install --save-dev jquery
npm install --save-dev bootstrap
npm install popper.js -D
npm install --save axios

Babel
npm i --save-dev babel-loader babel-core babel-preset-env babel-preset-react

Webpack 3
npm i -g webpack@3.11.0
npm i --save-dev webpack@3.11.0 webpack-cli

Webpack 4
npm i -g webpack@4 webpack-cli
npm i --save-dev webpack@4 webpack-cli
npm i -D extract-text-webpack-plugin@next

// React hot reload
npm i -D react-hot-loader

// Webpack merge for many profiles
npm i -D webpack-merge

Loaders
npm i --save-dev html-webpack-plugin html-loader pug-html-loader

CSS Loaders
npm i style-loader css-loader svg-loader
npm i less-loader less
npm i sass-loader node-sass
npm i -D postcss-loader

Extract CSS Plugins
npm i --save-dev mini-css-extract-plugin
npm install --save-dev extract-text-webpack-plugin
npm i -D optimize-css-assets-webpack-plugin cssnano

clean-webpack-plugin

npm i img-loader url-loader file-loader resolve-url-loader
npm i json-loader jshint-loader jshint font-loader transform-loader

Show progress bar when using webpack
npm i progress-bar-webpack-plugin

Minify JS
npm i -D uglifyjs-webpack-plugin
npm i -D babel-minify-webpack-plugin

Compress Plugin
npm i -D compression-webpack-plugin

Cache
npm i -D offline-plugin

Set process.env.NODE_ENV
SET NODE_ENV=development
