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
    module: {},
    resolve: {
        alias: {}
    },
    plugins: []
};

module.exports = webpackConfig;
