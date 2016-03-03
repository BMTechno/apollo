/** ------------------------------------------------------------------------- *\
 *  STYLES
 *  @author Rezki
 ** ------------------------------------------------------------------------- */


var gulp          = require( 'gulp' )
,   config        = require( '../configs/config' )
,   del           = require( 'del' )
,   notify        = require( 'gulp-notify' )
,   size          = require( 'gulp-size' )
,   sass          = require( 'gulp-sass' )
,   autoprefixer  = require( 'gulp-autoprefixer' )
,   gulpif        = require( 'gulp-if' )
,   sourcemaps    = require( 'gulp-sourcemaps' )
,   sequence      = require( 'run-sequence' )
,   replace       = require( 'gulp-replace' )   /* Used by style:old */
,   rename        = require( 'gulp-rename' )    /* Used by style:old */
;

var file = '*';

gulp.task( 'style:modern', function() {

    var s = size();

    return gulp.src( config.style.input + '/' + file + '.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass( config.style.options ) ).on( 'error', sass.logError )
        .pipe( autoprefixer( {
            browsers: 'last 2 versions',
        } ) )
        .pipe( sourcemaps.write( './maps' ) )
        .pipe( s )
        .pipe( gulp.dest( config.style.output + '/' ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) );
} );

gulp.task( 'style:old', function() {

    var s = size();
    var file = 'style';

    return gulp.src( config.style.input + '/' + file + '.scss' )
        .pipe( replace( /\$old\:\s*false;/g, function( str ) {
            return str.replace( /false/, "true" );
        } ) )
        .pipe( sourcemaps.init() )
        .pipe( autoprefixer( {
            browsers: 'last 2 versions',
        } ) )
        .pipe( sass( config.style.options ) ).on( 'error', sass.logError )
        .pipe( sourcemaps.write( './maps' ) )
        .pipe( rename( file + ".ie.css" ) )
        .pipe( s )
        .pipe( gulp.dest( config.style.output + '/' ) )
        .pipe( notify( {
            onLast: true,
            message: function() {
                return 'Generated <%= file.relative %>\n' + s.prettySize;
            }
        } ) );
} );

gulp.task( 'style:clean', function() {
    return del( [
        config.style.output + '/'
    ] );
});

gulp.task( 'styles', function( done ) {
    sequence(
        [ 'style:modern', 'style:old' ],
        done
    );
} );
