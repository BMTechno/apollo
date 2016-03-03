/** ------------------------------------------------------------------------- *\
 *  VENDOR
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   del = require( 'del' )
,   bower = require( 'main-bower-files' )
,   concat = require( 'gulp-concat' )
,   sourcemaps = require( 'gulp-sourcemaps' )
,   size = require( 'gulp-size' )
,   notify = require( 'gulp-notify' )
,   util = require( 'gulp-util' )
,   config = require( '../configs/config.js' );

gulp.task( 'vendor', [ 'vendor:clean' ], function() {

    var s = size();

    return gulp.src( bower( config.vendor.mainBowerFile.options ) )
        .pipe( concat( 'vendor.js' ) )
        .pipe( s )
        .pipe( gulp.dest( config.vendor.mainBowerFile.output ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) )
    ;
});

gulp.task( 'vendor:clean', function() {
    return del( [ config.vendor.mainBowerFile.output ] );
});
