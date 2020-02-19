const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const prod = {
    entry: './src/index.js',

    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    mode: 'production',
    module: {

        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },

                        },
                    },
                ],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer(),
                            ],
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
    prod,
);
