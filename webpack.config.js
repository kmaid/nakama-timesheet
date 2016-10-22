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