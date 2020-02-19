const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const dev = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: '3000',
        hotOnly: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    'url-loader',
                ],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'src/common/')],
                        },
                    },
                ],
            },

        ],
    },
};

module.exports = merge(
    require('./webpack.common'),
    dev,
);


