var CommonUI = {};

CommonUI.removePreloading = function() {
    $('body').removeClass('is-preloading');
}

CommonUI.toggleActive = function( $el ) {
    $el.toggleClass( 'is-active' );
}

CommonUI.initStickyHeader = function() {

    var $triggerEl = $('.header__bar-primary')
    ,   $wrapperEl = $('.main-header, .main-content');

    var waypoints = $triggerEl.waypoint({
        handler: function(direction) {
            console.log( $wrapperEl, direction );
            if ( direction === 'down' )  $wrapperEl.addClass( 'is-top' );
            else if ( direction === 'up' )  $wrapperEl.removeClass( 'is-top' );
        }
    });
}

module.exports = CommonUI;
