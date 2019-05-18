const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: ['@babel/polyfill','./site/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'overview.html',
            template: './site/overview.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }

        ]
    }
};