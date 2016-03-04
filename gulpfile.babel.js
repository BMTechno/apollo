/** ------------------------------------------------------------------------- *\
 * START HERE!
 * @author Rezki
 ** ------------------------------------------------------------------------- */

'use strict';

var gulp     = require('gulp')
,   del      = require('del')
,   sequence = require('run-sequence')
,   plumber  = require('gulp-plumber')
,   notify   = require('gulp-notify')
,   tasks    = require('./task')
,   config   = require('./task/configs/config.js')
;

var gulp_src = gulp.src;

gulp.src = function() {
    return gulp_src.apply( gulp, arguments )
        .pipe( plumber( function( error ) {
            notify.onError({
                message: 'Error: <%= error.message =>'
            });

            this.emit( 'end' );
        } ) )
    ;
};

gulp.task('default', ['prepare'], function(done) {
    sequence(
        ['asset'],
        ['font'],
        ['vendor'],
        ['sg'],
        ['webpack'],
        ['styles'],
        ['watch'],
        done
    );
});

gulp.task( 'clean', function() {
    return del( [
        './dist/**'
    ]);
});

gulp.task('prepare', function(done) {
    sequence(
        ['clean'],
        done
    );
});
