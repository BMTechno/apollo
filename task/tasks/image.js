/** ------------------------------------------------------------------------- *\
 * Image
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   del = require( 'del' )
,   notify = require( 'gulp-notify' )
,   size = require( 'gulp-size' )
,   changed = require( 'gulp-changed' )
,   imagemin = require( 'gulp-imagemin' )
,   config = require( '../configs/config' ).image;

gulp.task( 'image', function() {

    var s = size();

    return gulp.src( config.input )
        .pipe( changed( config.output ) ) // Ignore unchanged files
        .pipe( s )
        .pipe( gulp.dest( config.output ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) );
} );

gulp.task( 'image:cleanup', function() {
    return del( [
        config.output
    ] );
} );
