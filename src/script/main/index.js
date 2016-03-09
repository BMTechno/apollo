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
        },
        methods: {
            utilRemovePreloading: util.removePreloading,
            registerL1Click: category.registerL1Click,
            keepAspectRatio: util.keepAspectRatio,
            imageFillW: util.imageFillW
        }
    };

    modplug( 'apollo', plugins );

} )( jQuery );
