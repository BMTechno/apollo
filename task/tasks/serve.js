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

    // gulp.src('dist/index.html')
    //   .pipe(open({uri: 'http://localhost:5000'}));
});

gulp.task('serve:mobile', () => {
    browserSync({
        notify: false,
        server: {
            baseDir: ['dist']
        }
    });
});
