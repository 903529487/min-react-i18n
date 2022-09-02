
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const fs = require('fs');





module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname,"/lib"),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: '[name]',
    },
})