
const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./index.ts",
    output: {
        path: path.resolve("dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [ 
            new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })
        ]
    },
    externals: {
        "pico/hardware": "commonjs pico/hardware",
        "pico/highlevel": "commonjs pico/highlevel"
    },
    devtool: "source-map"
};