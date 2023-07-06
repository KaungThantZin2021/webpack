const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // watch: true,
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./deploy'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: './deploy',
        open: true
    }
};