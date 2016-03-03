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
        app: path.resolve( __dirname, './src/script/index.js' )
    },
    output: {
        path: path.resolve( __dirname, './dist/script/' ),
        filename: 'apollo.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer!sass'
            }
        ]
    },
    resolve: {
        alias: {}
    },
    plugins: []
};

module.exports = webpackConfig;
