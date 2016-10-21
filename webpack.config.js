module.exports = {
    entry: './src/Chronos',

    output: {
        path: './dist',
        filename: 'Chronos.dist.js',
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
    }
};
