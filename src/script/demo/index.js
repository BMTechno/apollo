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

        // Mocking GET:categories
        mock.fetch( 'api/v1/categories' )
            .then( mock.renderCategories )
            .then( _handleRenderCategories );

        // Mocking GET:adverts
        mock.fetch( 'api/v1/adverts' )
            .then( mock.renderListing )
            .then( _handleRenderListing );

        // Mocking GET:adverts
        mock.fetch( 'api/v1/adverts/1' )
            .then( mock.renderDetail )
            .then( _handleRenderDetail );

        // Privates
        // --------------------------------------------------------------------

        function _handleRenderCategories( res ) {
            $('body').apollo( 'utilRemovePreloading' );
            $( '.cat-l1__item' ).apollo( 'registerL1Click' );
        }

        function _handleRenderListing( res ) {

            $('.ad-listing').each(function(i) {
                $(this)
                    .apollo( 'utilRemovePreloading' )
                    .find('.listing__image-group')
                    .apollo( 'keepAspectRatio', { ratio: 1, calculate: 'height' } )
                    .apollo( 'imageFillW' );
            });
        }

        function _handleRenderDetail( res ) {
            $('.detail-gallery_group')
                .apollo( 'utilRemovePreloading' )
                .apollo( 'keepAspectRatio', { ratio: 4/3, calculate: 'height' } )
                .apollo( 'imageFillW' );
        }
    });

} )( jQuery );
