const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: { index: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),//此句可删除，默认也是dist
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            //filename: '[name].html'
        }),
    ],
    module: {
        rules: [],
    },
};