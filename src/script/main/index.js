/** ------------------------------------------------------------------------- *\
 * This is it.
 * @author Rezki
 ** ------------------------------------------------------------------------- */

import modplug from './modplug';
import * as browser from './browser';
import * as util from './util';
import * as category from './category';

( ( $ ) => {

    var plugins = {
        statics: {
            browserDetect: browser.detect,
            utilRemovePreloading: util.removePreloading
        },
        methods: {
            registerL1Click: category.registerL1Click,
            keepAspectRatio: util.keepAspectRatio
        }
    };

    modplug( 'apollo', plugins );

} )( jQuery );
