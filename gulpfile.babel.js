/** ------------------------------------------------------------------------- *\
 * START HERE!
 * @author Rezki
 ** ------------------------------------------------------------------------- */

'use strict';

var gulp     = require('gulp')
,   sequence = require('run-sequence')
,   plumber  = require('gulp-plumber')
,   notify   = require('gulp-notify')
,   tasks    = require('./task')
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
        ['font'],
        ['image'],
        ['vendor'],
        ['markups'],
        ['webpack'],
        ['styles'],
        ['watch'],
        done
    );
});

gulp.task('prepare', function(done) {
    sequence(
        ['webpack:clean'],
        ['style:clean'],
        done
    );
});
