const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dev_bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        writeToDisk: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                //  исключаем из бандла
                exclude: /node_modules/,
            }
        ]
    }
};
// npm run dev