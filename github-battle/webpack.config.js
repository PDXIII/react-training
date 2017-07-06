var path =  require('path');
var HTMLPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
    ]
  },
  plugins: [ new HTMLPlugin({
    template: 'app/index.html'
  })]
}
