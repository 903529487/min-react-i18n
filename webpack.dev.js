const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // entry: {
    //     app: './src/index.ts',
    // },
    devtool: 'inline-source-map',
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        // hot: true,
        // compress: true,
        // port: 9000,
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
    })],
})