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
,   sourcemaps = require( 'gulp-sourcemaps' )
,   webpack = require( 'webpack-stream' )
,   webpackConfig = require( '../../webpack.config.js' )
,   through = require( 'through2' )
,   config = require('../configs/config.js')
;

gulp.task( 'webpack', ['webpack:clean'], function() {

    var s = size();

    return gulp.src( config.webpack.input.main + '/index.js' )
        .pipe( webpack(
            webpackConfig,
            null,
            function( err, stats ) {
                if ( err ) throw new util.PluginError( "webpack", err );
                util.log( '[webpack]', stats.toString() );
            }
        ))
        .pipe( s )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe(through.obj(function (file, enc, cb) {
            // Dont pipe through any source map files as it will be handled by gulp-sourcemaps
            var isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe( sourcemaps.write( './maps' ) )
        .pipe( gulp.dest( config.webpack.output + '/' ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %> ' + s.prettySize;
            }
        } ) );
});

gulp.task( 'webpack:clean', function() {
    return del( [
        config.webpack.output + '/apollo.js',
        config.webpack.output + '/demo.js',
        config.webpack.output + '/maps/*',
    ] );
});
