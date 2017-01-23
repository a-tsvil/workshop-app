const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app/module.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    historyApiFallback: true
  },
  watch: true,

  resolve: {
    extensions: ['', '.js'],
  },
  externals: {
    'angular': 'angular',
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader!css-loader')
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
