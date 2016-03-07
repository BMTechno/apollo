var CommonUI = {};

CommonUI.removePreloading = function() {
    $('body').removeClass('is-preloading');
};

CommonUI.toggleActive = function( $el ) {
    $el.toggleClass( 'is-active' );
};

CommonUI.initStickyHeader = function() {

    var $triggerEl = $('.header__bar-primary')
    ,   $wrapperEl = $('.main-header, .main-content');

    console.log( $triggerEl );

    var waypoints = $('.header__bar-primary').waypoint({
        handler: function(direction) {
            if ( direction === 'down' )  $wrapperEl.addClass( 'is-top' );
            else if ( direction === 'up' )  $wrapperEl.removeClass( 'is-top' );
        }
    });
};

CommonUI.keepListingAspectRatio = function() {
    $('.listing__image-group').keepRatio({ ratio: 1, calculate: 'height' });
};

CommonUI.keepDetailAspectRatio = function() {
    $('.detail-gallery_group').keepRatio({ ratio: 4/3, calculate: 'height' });
};

CommonUI.formatCurrency = function( $el ) {
    $el.each( function(i) {
        var _self = $(this)
        ,   _formatted = accounting.formatMoney( _self.text() );

        _self.text( _formatted );
    });
};

CommonUI.imageFillW = function( $el ) {
    $el.each( function(i) {

        console.log( $(this) );

        $(this).imagefill({
            throttle:1000/60
        });
    });
}

module.exports = CommonUI;
