/** ------------------------------------------------------------------------- *\
 *  WATCHERS
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   config = require( '../configs/config' )
;

gulp.task( 'watch', [ 'setWatch' ], function() {

    gulp.watch( config.markup.view.input[0], [ 'markups' ] );

    gulp.watch( config.webpack.input + '/**/*.js', [ 'webpack' ] );

    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );
} );
