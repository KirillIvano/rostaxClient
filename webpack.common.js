const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: 'bundle.js',
        // `chunkFilename` provides a template for naming code-split bundles (optional)
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
