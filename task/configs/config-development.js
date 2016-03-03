/** ------------------------------------------------------------------------- *\
 * GODSPEED, YOU!
 * @author  Rezki
 ** ------------------------------------------------------------------------- */

var path = require( 'path' );

var packageConfig = require('../../package.json')
,   webpackConfig = require('../../webpack.config.js')
;

var root           = '.'
,   input          = root + '/src'
,   output         = root + '/dist';

var dev = {

    /* mirror package.json */
    packageConfig: {
        name: packageConfig.name,
        deps: Object.keys( packageConfig.devDependencies )
    },

    /* documentation */
    sg: {
        input: root + '/docs',
        output: root + '/dist',
        prefix: '$$',
        suffix: '',
        basepath: ''
    },

    /* webpack */
    webpack: {
        input: input + '/script',
        output: output + '/script'
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

    /* asset */
    asset: {
        input: [
            input + '/**/*.{png,jpg,svg,gif,ico,json,xml}',
            '!' + input + '/style/font/*'
            ],
        output: output + '/asset'
    },

    /* font */
    font: {
        input: input + '/style/font' + '/**/*.{eot,svg,ttf,woff,woff2,otf}',
        output: output + '/asset/font'
    }
};

module.exports = dev;
