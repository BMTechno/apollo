/** ------------------------------------------------------------------------- *\
 * This is it.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

(function( _self, $ ){

    var browser      = require( './browser' )
    ,   category     = require( './category' )
    ,   ad           = require( './ad' )
    ,   search       = require( './search' )
    ,   location     = require( './location' )
    ,   transitional = require( './transitional' )
    ,   commonUI     = require( './common' )
    ;

    $( function() {
        // Detect os
        browser.detect();
    });

}( this, jQuery ));
