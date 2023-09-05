'use strict';

var path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/App.js',
    // entry: { main: glob.sync('./src/**/*.js*') },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: ['jshint-loader']
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.svg$/, use: ['svg-inline-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.pug$/, use: ["html-loader", "pug-html-loader"] }



        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ]
};

// module.exports = {
//     entry: [
//         './src/App.js'
//     ],
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: './dist'
//     }
// };