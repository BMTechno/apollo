/** ------------------------------------------------------------------------- *\
 * Asset
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   del = require( 'del' )
,   notify = require( 'gulp-notify' )
,   size = require( 'gulp-size' )
,   changed = require( 'gulp-changed' )
,   imagemin = require( 'gulp-imagemin' )
,   config = require( '../configs/config' ).asset;

gulp.task( 'asset', function() {

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

gulp.task( 'asset:clean', function() {
    return del( [
        config.output + '/**',
        '!' + config.output,
        '!' + config.output + '/font/*'
    ] );
} );
