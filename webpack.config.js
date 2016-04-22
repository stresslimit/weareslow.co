var webpack = require('webpack')

var loaders = ['babel']
var entry = ['./js/index.js']


module.exports = {
  entry: entry,
  output: {
    path: __dirname + '/assets',
    filename: "build.js"
  },
  resolve: {
    root: ['./']
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: loaders, exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loaders: ['style', 'css', 'cssnext-loader'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    })
  ]
}
