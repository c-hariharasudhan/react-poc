const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const hotLoader = new webpack.HotModuleReplacementPlugin();

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
console.log(SRC_DIR)
console.log(DIST_DIR)
var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules:[{
            test: /\.(js|jsx)$/,
            include: SRC_DIR,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }]
    },
    plugins: [htmlPlugin, hotLoader],
    devServer: {
        contentBase: 'src/',
        hot: true
    }
};

module.exports = config;