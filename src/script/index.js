/** ------------------------------------------------------------------------- *\
 * This is it.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

accounting.settings = {
    currency: {
        symbol : "Rp",
        format: "%s%v",
        decimal : ",",
        thousand: ".",
        precision : 0
    },
    number: {
        precision : 0,
        thousand: ".",
        decimal : ","
    }
};
accounting.settings.currency.format = {
    pos : "%s %v",
    neg : "-%s %v",
    zero: "%s  0"
};

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

        mock.fetchListing( 'http://localhost:3004/adverts' )
            .then( mock.renderListing )
            .then( function( res ) {
                var $imgTargets = $(res).find('.listing__image-group');
                commonUI.imageFillW( $imgTargets );
            });
        mock.fetchDetail( 'http://localhost:3004/adverts/1' )
            .then( mock.renderDetail );

        // HOME - Category - L1
        category.handleL1Click();

        // CommonUI
        commonUI.initStickyHeader();
        commonUI.keepListingAspectRatio();
        commonUI.keepDetailAspectRatio();
    });

}( this, jQuery ));
