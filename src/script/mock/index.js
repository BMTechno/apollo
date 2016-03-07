/** ------------------------------------------------------------------------- *\
 * Mocking helper
 * @depends jQuery
 * @depends Transparency
 * @author Rezki
 ** ------------------------------------------------------------------------- */

var commonUI = require( '../common' );

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

Mock.fetchListing = function( url ) {
    var defer = $.Deferred();

    var reqListing = $.ajax({ url: url, dataType: 'json' });

    reqListing.done( function( res ) { defer.resolve( res );});
    reqListing.fail( function( req, status, err ) { defer.reject(); });

    return defer.promise();
}

Mock.renderListing = function( res ) {
    var rendered
    ,   defer = $.Deferred();

    var _advert = {
        js_ad_title: {
            html: function( params ) { return this.ad_name; }
        },
        js_ad_img_feat: {
            src: function( params ) { return this.ad_img_featured.url; },
            alt: function( params ) { return this.ad_img_featured.alt; }
        },
        js_ad_listing_meta_city: {
            html: function( params ) { return this.ad_city; },
        },
        js_ad_listing_meta_timeago: {
            html: function( params ) { return moment( this.ad_posted ).fromNow(); },
        },
        js_ad_listing_prz: {
            html: function( params ) { return accounting.formatMoney( this.ad_price ); },
        },
        js_ad_listing_price_nego: {
            html: function( params ) { return ( this.ad_price_negotiable > 0 ) ? 'NEGO' : ''; }
        }
    };

    rendered = Transparency.render( $('#js-ad-listing-group')[0], res, _advert );

    defer.resolve( rendered );

    return defer.promise();
}

module.exports = Mock;
