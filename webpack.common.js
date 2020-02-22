const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    output: {
        path: path.resolve('C:\\Users\\ivann\\simros\\static', 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: [
                            /node_modules/,
                        ],
                        'presets': ['@babel/env', '@babel/react'],
                        'plugins': ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-object-assign'],
                    },
                },
            },
        ],
    },
};
