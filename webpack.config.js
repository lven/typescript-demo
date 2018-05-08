const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path');
module.exports = {
    mode:"development",
    entry: './src/main.ts',
    devServer: {
        contentBase: "./dist",
        port: "8888",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: './bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};