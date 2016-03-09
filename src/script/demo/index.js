/** ------------------------------------------------------------------------- *\
 * Demo.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

import * as mock from './mock';

( ( $ ) => {

    var api_ns = 'api/v1';

    $( () => {

        // Feature Detection
        $.apollo.browserDetect();

        // Setup Mockjax
        $.mockjaxSettings.logging = false;

        // Mocking endpoints
        mock.init( api_ns, 'categories', 'mock/res/categories.json' );
        mock.init( api_ns, 'adverts', 'mock/res/adverts.json' );
        mock.init( api_ns, 'adverts/1', 'mock/res/adverts/1.json' );

        // Mocking GET
        mock.fetch( 'api/v1/categories' )
            .then( mock.renderCategories )
            .then( _handleRenderCategories );

        function _handleRenderCategories( res ) {
            $.apollo.utilRemovePreloading();
            $( '.cat-l1__item' ).apollo( 'registerL1Click' );
        }
    });

} )( jQuery );
