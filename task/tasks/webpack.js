/** ------------------------------------------------------------------------- *\
 * Webpack
 * This is hardcore
 *
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   del = require( 'del' )
,   util = require( 'gulp-util' )
,   notify = require( 'gulp-notify' )
,   size = require( 'gulp-size' )
,   webpack = require( 'webpack-stream' )
,   webpackConfig = require( '../../webpack.config.js' )
,   config = require('../configs/config.js')
;

gulp.task( 'webpack', function() {

    var s = size();

    return gulp.src( config.webpack.input + '/index.js' )
        .pipe( webpack(
            webpackConfig,
            null,
            function( err, stats ) {
                if ( err ) throw new util.PluginError( "webpack", err );
                util.log( '[webpack]', stats.toString() );
            }
        ))
        .pipe( s )
        .pipe( gulp.dest( config.webpack.output + '/' ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %> ' + s.prettySize;
            }
        } ) )
    ;
});

gulp.task( 'webpack:clean', function() {
    return del( [ config.webpack.output + '/' ] );
});
