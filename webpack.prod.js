const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MinifyPlugin({}, {})
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
});