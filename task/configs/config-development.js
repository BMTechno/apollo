/** ------------------------------------------------------------------------- *\
 * GODSPEED, YOU!
 * @author  Rezki
 ** ------------------------------------------------------------------------- */

var path = require( 'path' );

var packageConfig = require('../../package.json')
,   webpackConfig = require('../../webpack.config.js')
;

var root           = '.'
,   server         = root + '/application'
,   client         = root + '/src'
,   input          = client
,   output         = root + '/public';

var dev = {

    /* mirror package.json */
    packageConfig: {
        name: packageConfig.name,
        deps: Object.keys( packageConfig.devDependencies )
    },

    /* webpack */
    webpack: {
        input: input + '/script',
        output: output + '/script'
    },

    /* views */
    markup: {
        view: {
            input: [ input + '/index.html' ],
            output: output
        }
    },

    /* mostly components from bower */
    vendor: {
        mainBowerFile: {
            options: {
                paths: {
                    bowerDirectory: root + '/bower_components',
                    bowerrc: root + '/.bowerrc',
                    bowerJson: root + '/bower.json'
                },
                filter: '**/*.js'
            },
            output: output + '/script/lib'
        },
        standalone: {
            paths: input + '/script/vendor',
            output: output + '/script/lib'
        }
    },

    /* de stijl */
    style: {
        input: input + '/style',
        output: output + '/style',
        options: {
            errLogToConsole: true,
            outputStyle: 'expanded'
        }
    },

    /* image */
    image: {
        input: input + '/**/*.{png,jpg,svg,gif}',
        output: output + '/'
    },

    /* font */
    font: {
        input: input + '/style/font' + '/**/*.{eot,svg,ttf,woff,woff2,otf}',
        output: output + '/font'
    }
};

module.exports = dev;
