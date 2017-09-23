const webpack = require('webpack')
const path = require('path')

const config = {

  entry: [
    './src/MyGame/index.js'
  ],

  output: {
    path: path.join(__dirname),
    filename: 'app.js',
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

module.exports = config