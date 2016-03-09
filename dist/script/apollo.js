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

	/** ------------------------------------------------------------------------- *\
	 * This is it.
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	(function( _self, $ ){

	    var browser      = __webpack_require__( 1 )
	    ,   category     = __webpack_require__( 2 )
	    ,   ad           = __webpack_require__( 4 )
	    ,   search       = __webpack_require__( 5 )
	    ,   location     = __webpack_require__( 6 )
	    ,   transitional = __webpack_require__( 7 )
	    ,   commonUI     = __webpack_require__( 3 )
	    ;

	    $( function() {
	        // Detect os
	        browser.detect();
	    });

	}( this, jQuery ));


/***/ },
/* 1 */
/***/ function(module, exports) {

	/** ------------------------------------------------------------------------- *\
	 * Browser detection using Modernizr & Detectizr
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var Browser = {};

	Browser.detect = function() {
	    var _d = Detectizr.os;

	    console.log( 'Apollo says:', 'You\'re using ' + _d.name + ' v' + _d.version );
	}

	module.exports = Browser;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** ------------------------------------------------------------------------- *\
	 * Category UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var commonUI = __webpack_require__( 3 );

	var Category = {};

	Category.handleL1Click = function() {
	    $('body').on( 'click', '.cat-l1__item', function(e) {
	        e.preventDefault();
	        Category.toggleActive( $(this) );
	    });
	}

	Category.toggleActive = function( $el ) {
	    var $parent = $el.parent()
	    ,   $siblings = $parent.siblings()
	    ,   $prev = $parent.prev()
	    ,   $prevFar = $prev.prev()
	    ,   $next = $parent.next()
	    ,   $nextFar = $next.next()
	    ,   $grandParent = $parent.parent();

	    if ( !$parent.hasClass('is-active') ) {
	        $parent.removeClass('is-inactive').toggleClass('is-active');
	        $siblings.removeClass('is-inactive').removeClass('is-active');

	        if ( $(document).width() >= 1024 ) {
	            if ( $parent.index() === 1 || $parent.index() === 4 || $parent.index() === 7 ) {
	                $prev.addClass('is-inactive');
	                $next.addClass('is-inactive');
	            }
	            else if ( $parent.index() === 0 || $parent.index() === 3 || $parent.index() === 6 ) {
	                $next.addClass('is-inactive');
	                $nextFar.addClass('is-inactive');
	            }
	            else if ( $parent.index() === 2 || $parent.index() === 5 || $parent.index() === 8 ) {
	                $prev.addClass('is-inactive');
	                $prevFar.addClass('is-inactive');
	            }
	        }
	    } else {
	        $parent.removeClass('is-active');
	        $siblings.removeClass('is-inactive');
	    }
	}

	module.exports = Category;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var CommonUI = {};

	CommonUI.removePreloading = function() {
	    $('body').removeClass('is-preloading');
	};

	CommonUI.toggleActive = function( $el ) {
	    $el.toggleClass( 'is-active' );
	};

	CommonUI.initStickyHeader = function() {

	    var $triggerEl = $('.header__bar-primary')
	    ,   $wrapperEl = $('.main-header, .main-content');

	    console.log( $triggerEl );

	    var waypoints = $('.header__bar-primary').waypoint({
	        handler: function(direction) {
	            if ( direction === 'down' )  $wrapperEl.addClass( 'is-top' );
	            else if ( direction === 'up' )  $wrapperEl.removeClass( 'is-top' );
	        }
	    });
	};

	CommonUI.keepListingAspectRatio = function() {
	    $('.listing__image-group').keepRatio({ ratio: 1, calculate: 'height' });
	};

	CommonUI.keepDetailAspectRatio = function() {
	    $('.detail-gallery_group').keepRatio({ ratio: 4/3, calculate: 'height' });
	};

	CommonUI.formatCurrency = function( $el ) {
	    $el.each( function(i) {
	        var _self = $(this)
	        ,   _formatted = accounting.formatMoney( _self.text() );

	        _self.text( _formatted );
	    });
	};

	CommonUI.imageFillW = function( $el ) {
	    $el.each( function(i) {

	        console.log( $(this) );

	        $(this).imagefill({
	            throttle:1000/60
	        });
	    });
	}

	module.exports = CommonUI;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/** ------------------------------------------------------------------------- *\
	 * Ad UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var Ad = {};

	module.exports = Ad;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/** ------------------------------------------------------------------------- *\
	 * Search UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var Search = {};

	module.exports = Search;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/** ------------------------------------------------------------------------- *\
	 * Location UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var Location = {};

	module.exports = Location;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/** ------------------------------------------------------------------------- *\
	 * Transitional UI Scripts
	 * @author Rezki
	 ** ------------------------------------------------------------------------- */

	var Transitional = {};

	module.exports = Transitional;


/***/ }
/******/ ]);
//# sourceMappingURL=maps/apollo.js.map
