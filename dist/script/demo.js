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

	'use strict';

	var _mock = __webpack_require__(5);

	var mock = _interopRequireWildcard(_mock);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(function ($) {

	    var api_ns = 'api/v1';

	    $(function () {

	        // Feature Detection
	        $.apollo.browserDetect();

	        // Setup Mockjax
	        $.mockjaxSettings.logging = false;

	        // Mocking endpoints
	        mock.init(api_ns, 'categories', 'mock/res/categories.json');
	        mock.init(api_ns, 'adverts', 'mock/res/adverts.json');
	        mock.init(api_ns, 'adverts/1', 'mock/res/adverts/1.json');

	        // Mocking GET:categories
	        mock.fetch('api/v1/categories').then(mock.renderCategories).then(_handleRenderCategories);

	        // Mocking GET:adverts
	        mock.fetch('api/v1/adverts').then(mock.renderListing).then(_handleRenderListing);

	        // Privates
	        // --------------------------------------------------------------------

	        function _handleRenderCategories(res) {
	            $('body').apollo('utilRemovePreloading');
	            $('.cat-l1__item').apollo('registerL1Click');
	        }

	        function _handleRenderListing(res) {

	            $('.ad-listing').each(function (i) {
	                $(this).apollo('utilRemovePreloading').find('.listing__image-group').apollo('keepAspectRatio', { ratio: 1, calculate: 'height' }).apollo('imageFillW');
	            });
	        }
	    });
	})(jQuery); /** ------------------------------------------------------------------------- *\
	             * Demo.
	             * @author Rezki
	             ** ------------------------------------------------------------------------- */

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.init = init;
	exports.fetch = fetch;
	exports.renderCategories = renderCategories;
	exports.renderListing = renderListing;
	exports.renderDetail = renderDetail;
	/** ------------------------------------------------------------------------- *\
	 * Mocking helper
	 * @depends jQuery
	 * @depends Transparency
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	function init(ns, endpoint, proxy) {

	    $.mockjax({
	        url: ns + '/' + endpoint,
	        proxy: proxy,
	        responseTime: 2000
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
	            // href: function( params ) { return '#catitem__' + this.code; },
	            href: function href(params) {
	                return '#';
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

	    setTimeout(function () {
	        defer.resolve(rendered);
	    }, 300);

	    return defer.promise();
	}

	function renderListing(res) {
	    var rendered,
	        defer = $.Deferred();

	    var _advert = {
	        js_ad_title: {
	            html: function html(params) {
	                return this.ad_name;
	            },
	            href: function href(params) {
	                return 'ad-detail.html';
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

	    rendered = Transparency.render($('#js-ad-listing-group')[0], res.adverts, _advert);

	    defer.resolve(rendered);

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

/******/ });
//# sourceMappingURL=maps/demo.js.map
