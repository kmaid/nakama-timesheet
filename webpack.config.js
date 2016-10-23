var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js",
        sourceMapFilename:  "[file].map"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=./dist/[hash].[ext]"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=./dist/[hash].[ext]"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=./dist/[hash].[ext]"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=./dist/[hash].[ext]"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=./dist/[hash].[ext]"
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        },
    }
};