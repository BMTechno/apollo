/** ------------------------------------------------------------------------- *\
 * Mock
 * @author  Rezki
 ** ------------------------------------------------------------------------- */

var gulp          = require( 'gulp' )
,   path          = require( 'path' )
,   fs            = require( 'fs' )
,   del           = require( 'del' )
,   gulpIf        = require( 'gulp-if' )
,   uglify        = require( 'gulp-uglify' )
,   size          = require( 'gulp-size' )
,   notify        = require( 'gulp-notify' )
,   sequence      = require( 'run-sequence' )
,   config        = require( '../configs/config.js' );

gulp.task( 'mock', ['mock:clean'], function() {

    var s = size();

    return gulp.src( config.mock.input + '/**/*.json' )
        .pipe( notify({
            onLast: false,
            message: function() {
                return 'Start <%= file.relative %>'
            }
        }))
        .pipe( s )
        .pipe( gulp.dest( config.mock.output ) )
        .pipe( notify( {
            onLast: false,
            message: function() {
                return 'Generated <%= file.relative %> ' + s.prettySize;
            }
        }));
});

gulp.task( 'mock:clean', function() {
    return del( [
        config.sg.mock + '/**/*.json'
    ] );
} );
