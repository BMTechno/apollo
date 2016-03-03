/** ------------------------------------------------------------------------- *\
 * CALLING ALL TASKS
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var fs = require( 'fs' )
,   onlyScripts = require( './utils/script-filter' )
,   tasks = fs.readdirSync( './task/tasks/' ).filter( onlyScripts )
;

tasks.forEach( function( task ) {
    require( './tasks/' + task );
} );
