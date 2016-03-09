export function removePreloading() {
    var $el = $(this) || $('body');
    if ( !$el.length ) return;

    $el.removeClass('is-preloading');

    return $el;
}

export function toggleActive( $el ) {
    $el.toggleClass( 'is-active' );
}

export function imageFillW() {

    var $el = $(this);
    if ( !$el.length ) return;

    $el.each( function(i) {
        $(this).imagefill({
            throttle:1000/60
        });
    });
}

export function keepAspectRatio(opt) {

    var $el = ( $(this).length ) ? $(this) : $( '.listing__image-group' );
    if ( !$el.length ) return;

    $el.each( function(i) {
        $(this).keepRatio({ ratio: opt.ratio, calculate: opt.calculate });
    });

    return $el;
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
