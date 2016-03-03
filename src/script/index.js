/** ------------------------------------------------------------------------- *\
 * This is it.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

(function( _self, $ ){

    var browser = require( './browser' );

    $( function() {
        // Detect os
        browser.detect();
    });
}( this, jQuery ));
