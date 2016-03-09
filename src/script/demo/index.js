/** ------------------------------------------------------------------------- *\
 * Demo.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

(function( _self, $ ){

    var mock = require( './mock' )

    $( function() {
        // Mock API
        mock.fetchCategories( 'mock/res/categories.json' )
            .then( function(res) { console.log(res); });
    });

}( this, jQuery ));
