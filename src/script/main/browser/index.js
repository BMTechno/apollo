/** ------------------------------------------------------------------------- *\
 * Browser detection using Modernizr & Detectizr
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var Browser = {};

Browser.detect = function() {
    var _d = Detectizr.os;

    console.log( 'Apollo says:', 'You\'re using ' + _d.name + ' v' + _d.version );
}

module.exports = Browser;
