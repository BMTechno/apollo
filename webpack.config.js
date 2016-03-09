/** ------------------------------------------------------------------------- *\
 * @author  Rezki
 * @see https://webpack.github.io/docs/configuration.html
 ** ------------------------------------------------------------------------- */

var path = require('path')
,   webpack = require('webpack')
;

var webpackConfig = {
    debug: true,
    entry: {
        apollo: path.resolve( __dirname, './src/script/main/index.js' ),
        demo: path.resolve( __dirname, './src/script/demo/index.js' )
    },
    output: {
        path: path.resolve( __dirname, './dist/script/' ),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ],
    }
};

module.exports = webpackConfig;
