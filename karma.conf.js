/**
 * Karma test runner configuration.
 *
 * @param  {Object} config The configurator.
 *
 * @author Rubens Mariuzzo <rubens@mariuzzo.com>
 */
module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        files: [{
            pattern: 'test/**/*.test.js',
            watched: false
        }],

        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap'],
            'test/**/*.js': ['webpack', 'sourcemap']
        },

        webpack: Object.assign({}, require('./test/webpack.config'), {
            devtool: 'inline-source-map'
        }),

        webpackServer: {
            noInfo: true // Please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher'
        ],

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
    });
};
