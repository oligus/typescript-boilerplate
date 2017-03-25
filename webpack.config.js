const path = require("path");

var libraryName = 'typescript-boilerplate';
var outputFile = libraryName + '.js';

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: libraryName,
        path: __dirname + '/lib',
        filename: outputFile,
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },

    devtool: 'source-map'
};
