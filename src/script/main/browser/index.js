/** ------------------------------------------------------------------------- *\
 * Browser detection using Modernizr & Detectizr
 * @depends Detectizr
 * @depends Modernizr
 * @author Rezki
 ** ------------------------------------------------------------------------- */

export function detect() {

    if (typeof Detectizr !== 'object') return;

    var _d = Detectizr.os;

    console.log( 'Apollo says:', 'You\'re using ' + _d.name + ' v' + _d.version );
}
