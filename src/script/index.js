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
    ,   mock         = require( './mock' );

    $( function() {
        // Detect os
        browser.detect();

        // Mock API
        mock.fetchCategories( '/mock/res/categories.json' )
            .then( mock.renderCategories )
            .then( commonUI.removePreloading );

        // HOME - Category - L1
        category.handleL1Click();

        // CommonUI
        commonUI.initStickyHeader();
    });
}( this, jQuery ));
