path = require('path');
CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.join(__dirname, "src"),

    entry: {
        background: './background.js',
        content: './content.js'
    },

    output: {
        path: path.join(__dirname, 'build/js'),
        filename: '[name].js'
    },

    devtool: 'sourcemaps',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
                loader: 'file'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {from: './manifest.json', to: 'build/'}
        ])
    ]
};
