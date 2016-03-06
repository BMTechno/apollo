/** ------------------------------------------------------------------------- *\
 * Mocking helper
 * @depends jQuery
 * @depends Transparency
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var Mock = {};

Mock.fetchCategories = function( url ) {

    if ( typeof url !== 'string' || typeof $ !== 'function' ) return;

    var defer = $.Deferred();

    var reqCategories = $.ajax({ url: url, dataType: 'json' });

    reqCategories.done( function( res ) { defer.resolve( res ); });
    reqCategories.fail( function( req, status, err ) { defer.reject(); });

    return defer.promise();
};

Mock.renderCategories = function( res ) {

    if ( typeof Transparency !== 'object' ) return;

    var rendered
    ,   defer = $.Deferred();

    var _categories = {
        js_catsvg: {
            src: function( params ) { return '/asset/image/categories/ic_' + this.code + '.svg'; }
        },
        js_cathash: {
            href: function( params ) { return '#catitem__' + this.code; },
            id: function( params ) { return 'catitem__' + this.code; }
        },
        js_name_l1: {
            html: function( params ) { return this.name; }
        },
        children: {
            js_name_l2: {
                html: function( params ) { return this.name; }
            },
            js_num_l2: {
                html: function( params ) { return this.num; }
            }
        }
    };

    rendered = Transparency.render( $('#js-cat-l1-group')[0], res, _categories );

    window.setTimeout( function() { defer.resolve( rendered ); }, 300);

    return defer.promise();
};

module.exports = Mock;
