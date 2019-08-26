const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const chaiModule = path.resolve(__dirname, '../node_modules/chai/chai.js');
module.exports = {
    mode: 'development',
    devtool: "inline-source-map",

    entry: './test/src/index.ts',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../publish/test')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /chai-as-promised\.js$/,
                use: [
                    {
                        loader: "expose-loader",
                        options: "chaiPromised"
                    }
                ]
            },
            {
                test: /chai\.js$/,
                use: [
                    {
                        loader: "expose-loader",
                        options: "chai"
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts','.js'
        ],
        alias: {
            "chai": chaiModule,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "aibrowser",
            template: "./template/index.html"
        }),
        /**
         * 清空path.resolve(__dirname, '../publish/aibrowser/test') 目录下的所有文件
         */
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["!/assets/*"], // 防止清空assets/下的文件
            cleanAfterEveryBuildPatterns: ["!/assets/*", "main.*js"]  // 防止清空assets/下的文件
        })
    ],
    target: "node"
};