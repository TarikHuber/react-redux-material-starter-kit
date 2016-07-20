var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]',
                query: {
                    limit: 10240
                }
            }
        ]
    }

}
