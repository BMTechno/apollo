var CommonUI = {};

CommonUI.removePreloading = function() {
    $('body').removeClass('is-preloading');
}

CommonUI.toggleActive = function( $el ) {
    $el.toggleClass( 'is-active' );
}

module.exports = CommonUI;
