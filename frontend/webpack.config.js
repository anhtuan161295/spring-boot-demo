var path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }

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