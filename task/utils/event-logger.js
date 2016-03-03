/** ------------------------------------------------------------------------- *\
 * Some helper to do tasks
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var util = require( 'gulp-util' )
,   prettyHrtime = require('pretty-hrtime')
,   startTime
,

module.exports = {

    end: function( evt ) {
        var taskTime = process.hrtime(startTime)
        ,   time = prettyHrtime(taskTime);
        // util.log('Finished', util.colors.green( message ), 'in', util.colors.magenta(time));
        util.log( util.colors.magenta( evt ) );
    }
}
