export function removePreloading( selector ) {
    selector = ( typeof selector === 'string' ) ? selector : 'body';
    $( selector ).removeClass('is-preloading');
}

export function toggleActive( $el ) {
    $el.toggleClass( 'is-active' );
}

export function initStickyHeader() {

    var $triggerEl = $('.header__bar-primary')
    ,   $wrapperEl = $('.main-header, .main-content');

    console.log( $triggerEl );

    var waypoints = $('.header__bar-primary').waypoint({
        handler: function(direction) {
            if ( direction === 'down' )  $wrapperEl.addClass( 'is-top' );
            else if ( direction === 'up' )  $wrapperEl.removeClass( 'is-top' );
        }
    });
}

export function keepListingAspectRatio() {
    $('.listing__image-group').keepRatio({ ratio: 1, calculate: 'height' });
}

export function keepDetailAspectRatio() {
    $('.detail-gallery_group').keepRatio({ ratio: 4/3, calculate: 'height' });
}

export function formatCurrency( $el ) {
    $el.each( function(i) {
        var _self = $(this)
        ,   _formatted = accounting.formatMoney( _self.text() );

        _self.text( _formatted );
    });
}

export function imageFillW( $el ) {
    $el.each( function(i) {

        console.log( $(this) );

        $(this).imagefill({
            throttle:1000/60
        });
    });
}
