
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const fs = require('fs');





module.exports = merge(common, {
    mode: 'production',
    // entry:entry,
        // () => './src/tool',
    //     {
    //     'index': './src/tool/index.ts',
    //     'getUrlParam': './src/tool/getUrlParam.ts',
    //     'loadJs': './src/tool/loadJs.ts',
    //     'myLocalStorage': './src/tool/myLocalStorage.ts',
    // },
    output: {
        path: path.join(__dirname,"/lib"),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
    },
})