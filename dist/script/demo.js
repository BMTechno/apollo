/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/** ------------------------------------------------------------------------- *\
	 * Demo.
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	(function( _self, $ ){

	    var mock = __webpack_require__( 8 )

	    $( function() {
	        // Mock API
	        mock.fetchCategories( 'mock/res/categories.json' )
	            .then( function(res) { console.log(res); });
	    });

	}( this, jQuery ));


/***/ },

/***/ 8:
/***/ function(module, exports) {

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
	            src: function( params ) { return 'asset/image/categories/ic_' + this.code + '.svg'; }
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

	    reqListing.done( function( res ) { defer.resolve( res ); console.log( res ) });
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

	Mock.fetchDetail = function( url ) {
	    var defer = $.Deferred();

	    var reqListing = $.ajax({ url: url, dataType: 'json' });

	    reqListing.done( function( res ) { defer.resolve( res );});
	    reqListing.fail( function( req, status, err ) { defer.reject(); });

	    return defer.promise();
	}

	Mock.renderDetail = function( res ) {
	    var rendered
	    ,   defer = $.Deferred();

	    var _advert = {
	        js_ad_title: {
	            html: function( params ) { return this.ad_name; }
	        },
	        js_ad_detail_gallery: {
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
	        },
	        js_ad_condition: {
	            html: function( params ) { return ( this.ad_condition > 0 ) ? 'BARU' : 'BEKAS'; }
	        },
	        ad_verified: {
	            class: function( params ) { return ( this.ad_verified > 0 ) ? 'is-verified-seller' : ''; }
	        },
	        ad_id: {
	            html: function( params ) { return this.ad_id; }
	        },
	        ad_seller_name: {
	            html: function( params ) { return this.seller_name; }
	        },
	        ad_seller_contact: {
	            html: function( params ) { return this.seller_contact; }
	        },
	        ad_location: {
	            html: function( params ) { return this.ad_city; }
	        },
	        ad_seller_last_location: {
	            hmtl: function( params ) { return this.ac_city; }
	        },
	        seller_last_login: {
	            hmtl: function( params ) { return moment( this.seller_last_login ).fromNow(); }
	        },
	        seller_registered: {
	            hmtl: function( params ) { return moment( this.seller_registered ).fromNow(); }
	        }
	    };

	    rendered = Transparency.render( $('#js-ad-detail-group')[0], res, _advert );

	    defer.resolve( rendered );

	    return defer.promise();
	}

	module.exports = Mock;


/***/ }

/******/ });
//# sourceMappingURL=maps/demo.js.map
