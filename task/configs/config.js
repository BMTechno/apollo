/** ------------------------------------------------------------------------- *\
 * CALLING ALL TASKS
 * @author Rezki
 * @see https://github.com/whatwedo/gulp-wp-theme
 * @desc Config overrides:
 *       config-production > config-user > config-development
 ** ------------------------------------------------------------------------- */

var fs = require( 'fs' )
,   gutil = require( 'gulp-util' )
,   args = require( 'yargs' ).argv
,   gulpif = require( 'gulp-if' )
,   extend = require( 'node.extend' );

var config = require( './config-development.js' );

var hasUserConfig = fs.existsSync( './task/configs/config-user.js' )
,   hasProductionConfig = fs.existsSync( './task/configs/config-production.js' )
,   isProductionEnv = args.env === 'production';

if ( hasUserConfig ) {
    var userConfig = require( './config-user.js' );
    var mergedUserConfig = extend( true, {}, config, userConfig );
    config = extend( true, {}, mergedUserConfig );
}

if ( hasProductionConfig && isProductionEnv ) {
    var prodConfig = require( './config-production.js' );
    var mergedProdConfig = extend( true, {}, config, prodConfig );
    config = extend( true, {}, mergedProdConfig );
}

module.exports = config;
