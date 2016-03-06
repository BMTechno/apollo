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
    ,   mock         = require( './mock' );

    $( function() {
        // Detect os
        browser.detect();

        // Mock API
        mock.fetchCategories( '/mock/res/categories.json' )
            .then( mock.renderCategories );
    });
}( this, jQuery ));
