/** ------------------------------------------------------------------------- *\
 * Local server
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   connect = require( 'gulp-connect' );

gulp.task('serve', () => {
    connect.server({
        root: 'dist',
        port: 5000,
        livereload: true
    });

    // gulp.src('dist/index.html')
    //   .pipe(open({uri: 'http://localhost:5000'}));
});
