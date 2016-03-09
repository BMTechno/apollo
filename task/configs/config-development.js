/** ------------------------------------------------------------------------- *\
 * GODSPEED, YOU!
 * @author  Rezki
 ** ------------------------------------------------------------------------- */

var path = require( 'path' )
,   argv = require( 'yargs' ).argv;

var packageConfig = require('../../package.json')
,   webpackConfig = require('../../webpack.config.js')
;

var root   = '.'
,   input  = root + '/src'
,   output = root + '/dist';

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
        basepath: '',
        assetpath: 'asset'
    },

    /* mock */
    mock: {
        input: root + '/docs',
        output: root + '/dist',
    },

    /* webpack */
    webpack: {
        input: {
            input: input + '/script/main',
            demo: input + '/script/demo'
        },
        output: output + '/script'
    },

    /* mostly components from bower */
    vendor: {
        input: root + '/bower_components',
        output: root + '/dist/script/lib'
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

if ( argv.static ) {
    var dev = JSON.stringify( dev ).replace('./dist', './test');
    dev = JSON.parse(dev);
}

module.exports = dev;
