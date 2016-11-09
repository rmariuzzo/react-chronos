const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin;

module.exports = {
  entry: './src/Chronos',

  output: {
    path: './lib',
    filename: 'Chronos.js',
    library: 'Chronos',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  plugins: [
    new OccurrenceOrderPlugin(),
    new UglifyJsPlugin({minimize: true})
  ]
};
