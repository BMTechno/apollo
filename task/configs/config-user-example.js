/** ------------------------------------------------------------------------- *\
 * Change as you like
 * @author ?
 * @see https://github.com/whatwedo/gulp-wp-theme
 ** ------------------------------------------------------------------------- */

var packageConfig = require( '../package.json' );
var dest = './dist/' + packageConfig.name;
var src = './src';

module.exports = {

    /* THIS IS DUMMY CONFIG */
    browserSync: {
        server: false,
        files: [
            dest + "/**",
            "!" + dest + "/**.map"
        ],
        proxy: "myapp.dev",
        open: false
    }
};
