const path = require('path');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack');
const imageminOptipng = require('imagemin-optipng');
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    devServer:{
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    entry: './src/index.js',
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: 'bundle.js',
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: '[name].bundle.js',
    },
    // optimization:{
    //     minimizer: [new TerserJSPlugin({}) ,new OptimizeCssAssetsPlugin({})],
    // }, 
    devtool: 'eval-source-map',
    plugins:[
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new ImageminPlugin({
        //     bail: false,
        //     imageminOptions: {
        //         plugins: [
        //             imageminMozjpeg({
        //               quality: 50
        //             }),
        //             imageminOptipng({
        //               optimizationLevel: 5
        //             }),
        //         ]
        //     }
        // }),
    ],
    mode: 'production',
    module: {

        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',

                    options: {
                        exclude: [
                            /node_modules/
                        ],
                        "presets": ["@babel/env", "@babel/react"],
                        "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"],
                    }
                }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'url-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },

                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                }, ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },

                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'src/common/')],
                        },
                    },
                ]
            },
        ]
    }
};