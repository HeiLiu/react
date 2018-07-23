const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('dist')
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        open: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'
                ]
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'static/css/[name].css',
        //     chunkFilename: 'static/css/[id].css'
        // }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './public/index.html')
        })
    ]
}
