/** ------------------------------------------------------------------------- *\
 * Styleguide
 * @todo UNDER DEV
 * @author  Rezki
 * @see http://s.id/189
 ** ------------------------------------------------------------------------- */

var gulp          = require( 'gulp' )
,   path          = require( 'path' )
,   fs            = require( 'fs' )
,   del           = require( 'del' )
,   gulpIf        = require( 'gulp-if' )
,   gulpReplace   = require( 'gulp-replace' )
,   gulpRename   = require( 'gulp-rename' )
,   uglify        = require( 'gulp-uglify' )
,   size          = require( 'gulp-size' )
,   notify        = require( 'gulp-notify' )
,   sequence      = require( 'run-sequence' )
,   fileInclude   = require( 'gulp-file-include' )
,   config        = require( '../configs/config.js' );

gulp.task( 'sg', ['sg:clean'], function() {

    var s = size();

    return gulp.src( config.sg.input + '/**/*.tpl.html' )
        .pipe( notify({
            onLast: false,
            message: function() {
                return 'Start <%= file.relative %>'
            }
        }))
        .pipe( fileInclude({
            indent: true
        }))
        .pipe( gulpRename({ extname: "" }) )
        .pipe( gulpRename({ extname: ".html" }) )
        .pipe( gulpIf(/\.html/i, gulpReplace( '$$hosted_assets_prefix$$', '') ) )
        .pipe( gulp.dest( config.sg.output ) )
        .pipe( notify( {
            onLast: false,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        }));
});

gulp.task( 'sg:clean', function() {
    return del( [
        config.sg.output,
        '!' + config.sg.output + '/asset',
        '!' + config.sg.output + '/style',
    ] );
} );
