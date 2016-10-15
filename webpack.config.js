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
                test: /\.css$/, loader: "style!css"
            }
        ]
    },
    devtool: 'source-map'
};