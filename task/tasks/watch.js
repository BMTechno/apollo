/** ------------------------------------------------------------------------- *\
 *  WATCHERS
 *  @author Rezki
 ** ------------------------------------------------------------------------- */

var gulp = require( 'gulp' )
,   config = require( '../configs/config' )
;

gulp.task( 'watch', [ 'setWatch', 'serve' ], function() {

    gulp.watch( config.webpack.input.all + '/**/*.js', [ 'webpack' ] );

    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );

    gulp.watch( config.sg.input + '/**/*', [ 'sg' ] );

    gulp.watch( config.asset.input + '/**/*', [ 'asset' ] );
});

gulp.task( 'watch:mobile', [ 'setWatch', 'serve:mobile' ], function() {

    gulp.watch( config.webpack.input + '/**/*.js', [ 'webpack' ] );

    gulp.watch( config.style.input + '/**/*.scss', [ 'styles' ] );

    gulp.watch( config.sg.input + '/**/*', [ 'sg' ] );
});
