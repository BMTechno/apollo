/** ------------------------------------------------------------------------- *\
 * Local server
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   connect = require( 'gulp-connect' )
,   browserSync = require('browser-sync')
,   reload = browserSync.reload();

gulp.task('serve', () => {
    connect.server({
        root: 'dist',
        port: 5000,
        livereload: true
    });
});

gulp.task('serve:mobile', () => {
    browserSync({
        notify: false,
        server: {
            baseDir: ['dist']
        }
    });
});
