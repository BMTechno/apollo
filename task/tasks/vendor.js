/** ------------------------------------------------------------------------- *\
 *  VENDOR
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   del  = require( 'del' )
,   size  = require( 'gulp-size' )
,   notify  = require( 'gulp-notify' )
,   concat = require( 'gulp-concat' )
,   mainBowerFiles = require( 'main-bower-files' )
,   config = require( '../configs/config.js' ).vendor;

gulp.task( 'vendor', ['vendor:clean'], function() {

    var s = size();

    return gulp.src(
            mainBowerFiles({
                paths: {
                    bowerDirectory: 'bower_components',
                    bowerJson: 'bower.json'
                },
                includeDev: true
            })
        )
        .pipe( notify({
            onLast: false,
            message: function() {
                return 'Get <%= file.relative %>'
            }
        }))
        .pipe( concat( 'vendor.js' ) )
        .pipe( s )
        .pipe( gulp.dest( config.output ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        }));
});

gulp.task( 'vendor:clean', function() {
    return del( [ config.output ] );
});
