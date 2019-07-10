const path = require('path');
var webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: './frontend/soundcloud_2.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            WaveSurfer: 'wavesurfer.js'
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
            wavesurfer: require.resolve('wavesurfer.js')
        }
    }
};
