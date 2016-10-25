const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

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
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  externals: {
    'react': 'React',
    // Enzyme + React 15 compatibility.
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  plugins: [new UglifyJsPlugin({minimize: true})]
};
