/** ------------------------------------------------------------------------- *\
 * Fonts
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp       = require('gulp')
,   del        = require('del')
,   config     = require('../configs/config').font
,   changed    = require('gulp-changed')
,   size       = require('gulp-size')
,   notify     = require('gulp-notify')
,   gulpif     = require('gulp-if')
;

gulp.task('font', ['font:clean'], function() {

    var s = size();

    return gulp.src( config.input )
        .pipe( changed( config.output ) )
        .pipe( s )
        .pipe( gulp.dest( config.output ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated font files\n' + s.prettySize;
            }
        } ) )
    ;
});

gulp.task( 'font:clean', function() {
    return del( [
        config.output
    ] );
} );
