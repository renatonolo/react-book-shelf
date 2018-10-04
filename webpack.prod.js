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
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false, // remove comments
                },
                compress: {
                    unused: true,
                    dead_code: true, // big one--strip code that will never execute
                    warnings: false, // good for prod apps so users can't peek behind curtain
                    drop_debugger: true,
                    conditionals: true,
                    evaluate: true,
                    drop_console: true, // strips console statements
                    sequences: true,
                    booleans: true,
                }
            },
        })]
    }
});