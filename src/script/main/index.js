/** ------------------------------------------------------------------------- *\
 * This is it.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

import modplug from './modplug';
import * as browser from './browser';

( ( $ ) => {

    var plugins = {
        statics: {
            browserDetect: browser.detect
        }
    };

    modplug( 'apollo', plugins );

} )( jQuery );
