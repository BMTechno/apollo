/** ------------------------------------------------------------------------- *\
 *  WATCHERS
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   config = require( '../configs/config' )
;

gulp.task( 'watch', [ 'setWatch', 'serve' ], function() {

    gulp.watch( config.webpack.input + '/**/*.js', [ 'webpack' ] );

    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );

    gulp.watch( config.sg.input + '/**/*.{html}', [ 'sg' ] );
});
