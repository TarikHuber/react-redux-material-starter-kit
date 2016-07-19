var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot','babel' ],
        exclude: /node_modules/,
        include: __dirname
      }, { 
		test: /\.css$/, 
		loader: "style-loader!css-loader" 
	  }, { 
		test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
		exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]' 
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.css']
  }
}