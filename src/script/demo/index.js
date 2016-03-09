/** ------------------------------------------------------------------------- *\
 * Demo.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

import * as mock from './mock';

( ( $ ) => {

    $( () => {
        // Feature Detection
        $.apollo.browserDetect();

        // Mock API
        mock.init();

        mock.fetch( 'api/v1/categories' )
            .then( function(res) { console.log(res); });
    });

} )( jQuery );
