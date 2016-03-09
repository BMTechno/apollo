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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mock = __webpack_require__(3);

	var mock = _interopRequireWildcard(_mock);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(function ($) {

	    $(function () {
	        // Feature Detection
	        $.apollo.browserDetect();

	        // Mock API
	        mock.init();

	        mock.fetch('api/v1/categories').then(function (res) {
	            console.log(res);
	        });
	    });
	})(jQuery); /** ------------------------------------------------------------------------- *\
	             * Demo.
	             * @author Rezki
	             ** ------------------------------------------------------------------------- */

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.init = init;
	exports.fetch = fetch;
	exports.renderCategories = renderCategories;
	exports.fetchListing = fetchListing;
	exports.renderListing = renderListing;
	exports.fetchDetail = fetchDetail;
	exports.renderDetail = renderDetail;
	/** ------------------------------------------------------------------------- *\
	 * Mocking helper
	 * @depends jQuery
	 * @depends Transparency
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	function init() {
	    $.mockjax({
	        url: 'api/v1/categories',
	        proxy: 'mock/res/categories.json'
	    });
	}

	function fetch(url) {

	    if (typeof url !== 'string' || typeof $ !== 'function') return;

	    var defer = $.Deferred();

	    var req = $.ajax({
	        url: url,
	        dataType: 'json'
	    });

	    req.done(function (res) {
	        defer.resolve(res);
	    });
	    req.fail(function (req, status, err) {
	        defer.reject();
	    });

	    return defer.promise();
	}

	function renderCategories(res) {

	    if ((typeof Transparency === 'undefined' ? 'undefined' : _typeof(Transparency)) !== 'object') return;

	    var rendered,
	        defer = $.Deferred();

	    var _categories = {
	        js_catsvg: {
	            src: function src(params) {
	                return 'asset/image/categories/ic_' + this.code + '.svg';
	            }
	        },
	        js_cathash: {
	            href: function href(params) {
	                return '#catitem__' + this.code;
	            },
	            id: function id(params) {
	                return 'catitem__' + this.code;
	            }
	        },
	        js_name_l1: {
	            html: function html(params) {
	                return this.name;
	            }
	        },
	        children: {
	            js_name_l2: {
	                html: function html(params) {
	                    return this.name;
	                }
	            },
	            js_num_l2: {
	                html: function html(params) {
	                    return this.num;
	                }
	            }
	        }
	    };

	    rendered = Transparency.render($('#js-cat-l1-group')[0], res, _categories);

	    window.setTimeout(function () {
	        defer.resolve(rendered);
	    }, 300);

	    return defer.promise();
	}

	function fetchListing(url) {
	    var defer = $.Deferred();

	    var reqListing = $.ajax({ url: url, dataType: 'json' });

	    reqListing.done(function (res) {
	        defer.resolve(res);console.log(res);
	    });
	    reqListing.fail(function (req, status, err) {
	        defer.reject();
	    });

	    return defer.promise();
	}

	function renderListing(res) {
	    var rendered,
	        defer = $.Deferred();

	    var _advert = {
	        js_ad_title: {
	            html: function html(params) {
	                return this.ad_name;
	            }
	        },
	        js_ad_img_feat: {
	            src: function src(params) {
	                return this.ad_img_featured.url;
	            },
	            alt: function alt(params) {
	                return this.ad_img_featured.alt;
	            }
	        },
	        js_ad_listing_meta_city: {
	            html: function html(params) {
	                return this.ad_city;
	            }
	        },
	        js_ad_listing_meta_timeago: {
	            html: function html(params) {
	                return moment(this.ad_posted).fromNow();
	            }
	        },
	        js_ad_listing_prz: {
	            html: function html(params) {
	                return accounting.formatMoney(this.ad_price);
	            }
	        },
	        js_ad_listing_price_nego: {
	            html: function html(params) {
	                return this.ad_price_negotiable > 0 ? 'NEGO' : '';
	            }
	        }
	    };

	    rendered = Transparency.render($('#js-ad-listing-group')[0], res, _advert);

	    defer.resolve(rendered);

	    return defer.promise();
	}

	function fetchDetail(url) {
	    var defer = $.Deferred();

	    var reqListing = $.ajax({ url: url, dataType: 'json' });

	    reqListing.done(function (res) {
	        defer.resolve(res);
	    });
	    reqListing.fail(function (req, status, err) {
	        defer.reject();
	    });

	    return defer.promise();
	}

	function renderDetail(res) {
	    var rendered,
	        defer = $.Deferred();

	    var _advert = {
	        js_ad_title: {
	            html: function html(params) {
	                return this.ad_name;
	            }
	        },
	        js_ad_detail_gallery: {
	            src: function src(params) {
	                return this.ad_img_featured.url;
	            },
	            alt: function alt(params) {
	                return this.ad_img_featured.alt;
	            }
	        },
	        js_ad_listing_meta_city: {
	            html: function html(params) {
	                return this.ad_city;
	            }
	        },
	        js_ad_listing_meta_timeago: {
	            html: function html(params) {
	                return moment(this.ad_posted).fromNow();
	            }
	        },
	        js_ad_listing_prz: {
	            html: function html(params) {
	                return accounting.formatMoney(this.ad_price);
	            }
	        },
	        js_ad_listing_price_nego: {
	            html: function html(params) {
	                return this.ad_price_negotiable > 0 ? 'NEGO' : '';
	            }
	        },
	        js_ad_condition: {
	            html: function html(params) {
	                return this.ad_condition > 0 ? 'BARU' : 'BEKAS';
	            }
	        },
	        ad_verified: {
	            class: function _class(params) {
	                return this.ad_verified > 0 ? 'is-verified-seller' : '';
	            }
	        },
	        ad_id: {
	            html: function html(params) {
	                return this.ad_id;
	            }
	        },
	        ad_seller_name: {
	            html: function html(params) {
	                return this.seller_name;
	            }
	        },
	        ad_seller_contact: {
	            html: function html(params) {
	                return this.seller_contact;
	            }
	        },
	        ad_location: {
	            html: function html(params) {
	                return this.ad_city;
	            }
	        },
	        ad_seller_last_location: {
	            hmtl: function hmtl(params) {
	                return this.ac_city;
	            }
	        },
	        seller_last_login: {
	            hmtl: function hmtl(params) {
	                return moment(this.seller_last_login).fromNow();
	            }
	        },
	        seller_registered: {
	            hmtl: function hmtl(params) {
	                return moment(this.seller_registered).fromNow();
	            }
	        }
	    };

	    rendered = Transparency.render($('#js-ad-detail-group')[0], res, _advert);

	    defer.resolve(rendered);

	    return defer.promise();
	}

/***/ }
/******/ ]);
//# sourceMappingURL=maps/demo.js.map
