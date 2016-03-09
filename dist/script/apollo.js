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

	var _modplug = __webpack_require__(1);

	var _modplug2 = _interopRequireDefault(_modplug);

	var _browser = __webpack_require__(2);

	var browser = _interopRequireWildcard(_browser);

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	var _category = __webpack_require__(4);

	var category = _interopRequireWildcard(_category);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ------------------------------------------------------------------------- *\
	 * This is it.
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	(function ($) {

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

	    (0, _modplug2.default)('apollo', plugins);
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = modplug;
	function modplug(namespace, options) {
	    'use strict';

	    /**
	     * LICENSED | MIT
	     * Copyright (c) 2015 Lars Jung (http://larsjung.de)
	     */

	    // Some references to enhance minification.

	    var slice = [].slice;
	    var $ = jQuery;
	    var extend = $.extend;
	    var isFn = $.isFunction;

	    // Save the initial settings.
	    var settings = extend({}, options);

	    // Helper function to apply default methods.
	    function applyMethod(obj, args, methodName, methods) {

	        // If `methodName` is a function apply it to get the actual
	        // method name.
	        methodName = isFn(methodName) ? methodName.apply(obj, args) : methodName;

	        // If method exists then apply it and return the result ...
	        if (isFn(methods[methodName])) {
	            return methods[methodName].apply(obj, args);
	        }

	        // ... otherwise raise an error.
	        $.error('Method "' + methodName + '" does not exist on jQuery.' + namespace);
	    }

	    // This function gets exposed as `$.<namespace>`.
	    var statics = function statics() {

	        // Try to apply a default method.
	        return applyMethod(this, slice.call(arguments), settings.defaultStatic, statics);
	    };

	    // This function gets exposed as `$(selector).<namespace>`.
	    var methods = function methods(method) {

	        // If `method` exists then apply it ...
	        if (isFn(methods[method])) {
	            return methods[method].apply(this, slice.call(arguments, 1));
	        }

	        // ... otherwise try to apply a default method.
	        return applyMethod(this, slice.call(arguments), settings.defaultMethod, methods);
	    };

	    // Adds/overwrites plugin methods. This function gets exposed as
	    // `$.<namespace>.modplug` to make the plugin extendable.
	    function plug(options) {

	        if (options) {
	            extend(statics, options.statics);
	            extend(methods, options.methods);
	        }

	        // Make sure that `$.<namespace>.modplug` points to this function
	        // after adding new methods.
	        statics.modplug = plug;
	    }

	    // Save objects or methods previously registered to the desired namespace.
	    // They are available via `$.<namespace>.modplug.prev`.
	    plug.prev = {
	        statics: $[namespace],
	        methods: $.fn[namespace]
	    };

	    // Init the plugin by adding the specified statics and methods.
	    plug(options);

	    // Register the plugin.
	    $[namespace] = statics;
	    $.fn[namespace] = methods;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.detect = detect;
	/** ------------------------------------------------------------------------- *\
	 * Browser detection using Modernizr & Detectizr
	 * @depends Detectizr
	 * @depends Modernizr
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	function detect() {

	  if ((typeof Detectizr === 'undefined' ? 'undefined' : _typeof(Detectizr)) !== 'object') return;

	  var _d = Detectizr.os;

	  console.log('Apollo says:', 'You\'re using ' + _d.name + ' v' + _d.version);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.removePreloading = removePreloading;
	exports.toggleActive = toggleActive;
	exports.initStickyHeader = initStickyHeader;
	exports.keepAspectRatio = keepAspectRatio;
	exports.keepDetailAspectRatio = keepDetailAspectRatio;
	exports.formatCurrency = formatCurrency;
	exports.imageFillW = imageFillW;
	function removePreloading(selector) {
	    selector = typeof selector === 'string' ? selector : 'body';
	    $(selector).removeClass('is-preloading');
	}

	function toggleActive($el) {
	    $el.toggleClass('is-active');
	}

	function initStickyHeader() {

	    var $triggerEl = $('.header__bar-primary'),
	        $wrapperEl = $('.main-header, .main-content');

	    console.log($triggerEl);

	    var waypoints = $('.header__bar-primary').waypoint({
	        handler: function handler(direction) {
	            if (direction === 'down') $wrapperEl.addClass('is-top');else if (direction === 'up') $wrapperEl.removeClass('is-top');
	        }
	    });
	}

	function keepAspectRatio(opt) {

	    var $el = $(this);
	    if (!$el.length) return;

	    $el.each(function (i) {
	        $(this).keepRatio({ ratio: opt.ratio, calculate: opt.calculate });
	    });
	}

	function keepDetailAspectRatio() {
	    $('.detail-gallery_group').keepRatio({ ratio: 4 / 3, calculate: 'height' });
	}

	function formatCurrency($el) {
	    $el.each(function (i) {
	        var _self = $(this),
	            _formatted = accounting.formatMoney(_self.text());

	        _self.text(_formatted);
	    });
	}

	function imageFillW($el) {
	    $el.each(function (i) {

	        console.log($(this));

	        $(this).imagefill({
	            throttle: 1000 / 60
	        });
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.registerL1Click = registerL1Click;
	/** ------------------------------------------------------------------------- *\
	 * Category UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	function _toggleActive($el) {
	    var $parent = $el.parents().filter(function () {
	        return $(this).data('cat') === 'l1';
	    }).eq(0);

	    var $siblings = $parent.siblings(),
	        $prev = $parent.prev(),
	        $prevFar = $prev.prev(),
	        $next = $parent.next(),
	        $nextFar = $next.next(),
	        $grandParent = $parent.parent();

	    if (!$parent.hasClass('is-active')) {
	        $parent.removeClass('is-inactive').toggleClass('is-active');
	        $siblings.removeClass('is-inactive').removeClass('is-active');

	        if ($(document).width() >= 1024) {
	            if ($parent.index() === 1 || $parent.index() === 4 || $parent.index() === 7) {
	                $prev.addClass('is-inactive');
	                $next.addClass('is-inactive');
	            } else if ($parent.index() === 0 || $parent.index() === 3 || $parent.index() === 6) {
	                $next.addClass('is-inactive');
	                $nextFar.addClass('is-inactive');
	            } else if ($parent.index() === 2 || $parent.index() === 5 || $parent.index() === 8) {
	                $prev.addClass('is-inactive');
	                $prevFar.addClass('is-inactive');
	            }
	        }
	    } else {
	        $parent.removeClass('is-active');
	        $siblings.removeClass('is-inactive');
	    }
	}

	function registerL1Click() {

	    var $el = $(this).length ? $(this) : $('.cat-l1__item');

	    if (!$el.length) return;

	    $(document).on('click', $('.cat-l1__item'), function (e) {
	        // e.preventDefault();
	        _toggleActive($(e.target));
	    });

	    return $el;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=maps/apollo.js.map
