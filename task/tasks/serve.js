/** ------------------------------------------------------------------------- *\
 * Local server
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   connect = require( 'gulp-connect' )
,   browserSync = require('browser-sync')
,   reload = browserSync.reload()
,   argv = require( 'yargs' ).argv

gulp.task('serve', () => {
    if ( !argv.sync ) {
        connect.server({
            root: 'dist',
            port: 5005,
            livereload: true
        });
    } else {
        browserSync({
            notify: false,
            server: {
                baseDir: ['dist']
            }
        });
    }
});
