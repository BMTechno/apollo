/** ------------------------------------------------------------------------- *\
 * Browserify Logger
 * Might not need this, now using webpack
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var util = require('gulp-util')
,   prettyHrtime = require('pretty-hrtime')
,   startTime
;

module.exports = {
    start: function( restart ) {
        startTime = process.hrtime()
        var message = restart ? "'rebundle'" : "'bundle'";
        util.log('Running', util.colors.green( message ) + '...');
    },

    watch: function() {
        util.log( util.colors.green( 'Watch bundle process...' ) );
    },

    end: function( restart ) {
        var taskTime = process.hrtime(startTime)
        ,   time = prettyHrtime(taskTime)
        ,   message = restart ? "'rebundle'" : "'bundle'";
        util.log('Finished', util.colors.green( message ), 'in', util.colors.magenta(time));
    }
};
