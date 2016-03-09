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

        // mock.fetch( 'api/v1/categories' )
        //     .then( function(res) { console.log(res); });

        mock.fetch( 'api/v1/adverts/1' )
            .then( function(res) { console.log(res); });
    });

} )( jQuery );
