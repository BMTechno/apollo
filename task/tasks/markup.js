/** ------------------------------------------------------------------------- *\
 *  MARKUPS
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp          = require( 'gulp' )
,   del           = require( 'del' )
,   uglify        = require( 'gulp-uglify' )
,   size          = require( 'gulp-size' )
,   notify        = require( 'gulp-notify' )
,   sequence      = require( 'run-sequence' )
,   config        = require( '../configs/config.js' ).markup;

gulp.task( 'markup:view', function() {

    var s = size();

    return gulp.src( config.view.input )
        .pipe( s )
        .pipe( gulp.dest( config.view.output ) )
        .pipe( notify( {
            onLast: false,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) )
    ;
});

gulp.task( 'markup:clean', function() {
    return del( [
        config.view.output + '/index.html',
        config.cache.output + '/'
    ] );
});

gulp.task( 'markups', function( done ) {
    sequence(
        [ 'markup:view' ],
        done
    );
});
