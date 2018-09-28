const { join } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: join(__dirname, 'public'),
        compress: false
    },
    stats: {
        colors: true,
        reasons: true
    }
});