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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chronology = undefined;

	var _Chronology = __webpack_require__(1);

	var _Chronology2 = _interopRequireDefault(_Chronology);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Chronology = _Chronology2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dedupe = __webpack_require__(3);

	var _dedupe2 = _interopRequireDefault(_dedupe);

	var _utils = __webpack_require__(4);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The Chronology component is the main and base component.
	 */
	var Chronology = function (_React$Component) {
	  _inherits(Chronology, _React$Component);

	  /**
	   * Construct a new chronlogy.
	   */
	  function Chronology(props) {
	    _classCallCheck(this, Chronology);

	    return _possibleConstructorReturn(this, (Chronology.__proto__ || Object.getPrototypeOf(Chronology)).call(this, props));
	  }

	  /**
	   * Apply styling to timeline.
	   */


	  _createClass(Chronology, [{
	    key: 'styleTimeline',
	    value: function styleTimeline() {
	      this.timeline.style.position = 'absolute';
	      this.timeline.style.backgroundColor = '#ccc';

	      if (this.props.type === 'horizontal') {
	        var timelineHeight = 4;
	        var containerHeight = this.container.offsetHeight;
	        var timelineTop = (containerHeight - timelineHeight) / containerHeight / 2;
	        this.timeline.style.top = timelineTop * 100 + '%';
	        this.timeline.style.left = 0;
	        this.timeline.style.height = timelineHeight + 'px';
	        this.timeline.style.marginTop = '-' + timelineHeight / 2 + 'px';
	      } else if (this.props.type === 'vertical') {
	        var timelineWidth = 4;
	        var containerWidth = this.container.offsetWidth;
	        var timelineLeft = (containerWidth - timelineWidth) / containerWidth / 2;
	        this.timeline.style.left = timelineLeft * 100 + '%';
	        this.timeline.style.top = 0;
	        this.timeline.style.width = timelineWidth + 'px';
	        this.timeline.style.marginTop = '-' + timelineWidth / 2 + 'px';
	      }
	    }

	    /**
	     * Apply styling to events and its markers (if any).
	     */

	  }, {
	    key: 'styleEvents',
	    value: function styleEvents() {
	      var _this2 = this;

	      var events = Array.from(this.container.querySelectorAll(this.props.eventSelector));
	      var markers = Array.from(this.container.querySelectorAll(this.props.markerSelector));

	      var centerX = this.container.offsetWidth / 2;
	      var centerY = this.container.offsetHeight / 2;

	      var containerWidth = this.container.offsetWidth;
	      var containerHeight = this.container.offsetHeight;

	      var _props = this.props;
	      var type = _props.type;
	      var markerClassNames = _props.markerClassNames;

	      // Positionate events side by side.

	      var sides = { a: 0, b: 0 };
	      var lastMarkerPos = 0;

	      events.forEach(function (event, i) {
	        event.style.position = 'absolute';

	        if (type === 'horizontal') {
	          // Select in which side to put the event.
	          var top = sides.a <= sides.b;
	          if (top) {
	            event.style.top = 0;
	            event.style.left = sides.a + 'px';
	            sides.a += utils.outerWidth(event);
	          } else {
	            event.style.bottom = 0;
	            event.style.left = sides.b + 'px';
	            sides.b += utils.outerWidth(event);
	          }

	          // Position the marker.
	          var marker = markers[i];
	          if (marker) {
	            var className = top ? markerClassNames.top : markerClassNames.bottom;
	            marker.className = (0, _dedupe2.default)(marker.className, className);

	            marker.style.position = 'absolute';
	            var markerTop = (containerHeight - marker.offsetHeight) / containerHeight / 2;
	            marker.style.top = markerTop * 100 + '%';

	            var nextMarkerLeft = parseInt(event.style.left, 10);
	            var markerOuterWidth = utils.outerWidth(marker);
	            var willOverlap = i > 0 && nextMarkerLeft <= lastMarkerPos + markerOuterWidth;

	            if (willOverlap) {
	              nextMarkerLeft = lastMarkerPos + markerOuterWidth;
	            }
	            marker.style.left = nextMarkerLeft + 'px';
	            lastMarkerPos = nextMarkerLeft;
	          }

	          // TODO Handle special case where the marker could be place outside the event.

	          // Adjust the width of the container and the timeline.
	          // TODO The container should only be resized if the width wasn't provided.
	          // this.container.style.width = Math.max(sides.a, sides.b) + 'px';
	          _this2.timeline.style.width = Math.max(sides.a, sides.b) + 'px';
	        } else if (type === 'vertical') {

	          // Select in which side to put the event.
	          var left = sides.a <= sides.b;
	          if (left) {
	            event.style.left = 0;
	            event.style.top = sides.a + 'px';
	            sides.a += utils.outerHeight(event);
	          } else {
	            event.style.right = 0;
	            event.style.top = sides.b + 'px';
	            sides.b += utils.outerHeight(event);
	          }

	          // Position the marker.
	          var _marker = markers[i];
	          if (_marker) {
	            var _className = left ? markerClassNames.left : markerClassNames.right;
	            _marker.className = (0, _dedupe2.default)(_marker.className, _className);

	            _marker.style.position = 'absolute';
	            var markerLeft = (containerWidth - _marker.offsetWidth) / containerWidth / 2;
	            _marker.style.left = markerLeft * 100 + '%';

	            var nextMarkerTop = parseInt(event.style.top, 10);
	            var markerOuterHeight = utils.outerHeight(_marker);
	            var _willOverlap = i > 0 && nextMarkerTop <= lastMarkerPos + markerOuterHeight;

	            if (_willOverlap) {
	              nextMarkerTop = lastMarkerPos + markerOuterHeight;
	            }
	            _marker.style.top = nextMarkerTop + 'px';
	            lastMarkerPos = nextMarkerTop;
	          }

	          // TODO Handle special case where the marker could be place outside the event.

	          // Adjust the height of the container and the timeline.
	          // TODO The container should only be resized if the height wasn't provided.
	          // this.container.style.height = Math.max(sides.a, sides.b) + 'px';
	          _this2.timeline.style.height = Math.max(sides.a, sides.b) + 'px';
	        }
	      });
	    }

	    /**
	     * Redraw the entire chronology.
	     */

	  }, {
	    key: 'redraw',
	    value: function redraw() {
	      this.container.style.position = 'relative';
	      this.styleTimeline();
	      this.styleEvents();
	    }

	    /**
	     * Redraw upon mounting.
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.redraw();
	    }

	    /**
	     * Redraw upon update.
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.redraw();
	    }

	    /**
	     * Render the chronology.
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      // Extract component properties and extra passed properties.
	      var _props2 = this.props;
	      var type = _props2.type;
	      var eventSelector = _props2.eventSelector;
	      var markerSelector = _props2.markerSelector;
	      var markerClassNames = _props2.markerClassNames;
	      var markerStyles = _props2.markerStyles;

	      var otherProps = _objectWithoutProperties(_props2, ['type', 'eventSelector', 'markerSelector', 'markerClassNames', 'markerStyles']);

	      return _react2.default.createElement(
	        'div',
	        _extends({}, otherProps, { ref: function ref(el) {
	            return _this3.container = el;
	          } }),
	        _react2.default.createElement('div', { ref: function ref(el) {
	            return _this3.timeline = el;
	          } }),
	        this.props.children
	      );
	    }
	  }]);

	  return Chronology;
	}(_react2.default.Component);

	Chronology.propTypes = {
	  type: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  eventSelector: _react.PropTypes.string,
	  markerSelector: _react.PropTypes.string,
	  markerClassNames: _react.PropTypes.shape({
	    left: _react.PropTypes.string,
	    right: _react.PropTypes.string,
	    top: _react.PropTypes.string,
	    bottom: _react.PropTypes.string
	  }),
	  markerStyles: _react.PropTypes.shape({
	    left: _react.PropTypes.object,
	    right: _react.PropTypes.object,
	    top: _react.PropTypes.object,
	    bottom: _react.PropTypes.object
	  })
	};

	Chronology.defaultProps = {
	  type: 'vertical',
	  eventSelector: '.event',
	  markerSelector: '.marker',
	  markerClassNames: {
	    left: 'marker-left',
	    right: 'marker-right',
	    top: 'marker-top',
	    bottom: 'marker-bottom'
	  },
	  markerStyles: {
	    left: {},
	    right: {},
	    top: {},
	    bottom: {}
	  }
	};

	exports.default = Chronology;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var classNames = (function () {
			// don't inherit from Object so we can skip hasOwnProperty check later
			// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
			function StorageObject() {}
			StorageObject.prototype = Object.create(null);

			function _parseArray (resultSet, array) {
				var length = array.length;

				for (var i = 0; i < length; ++i) {
					_parse(resultSet, array[i]);
				}
			}

			var hasOwn = {}.hasOwnProperty;

			function _parseNumber (resultSet, num) {
				resultSet[num] = true;
			}

			function _parseObject (resultSet, object) {
				for (var k in object) {
					if (hasOwn.call(object, k)) {
						// set value to false instead of deleting it to avoid changing object structure
						// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
						resultSet[k] = !!object[k];
					}
				}
			}

			var SPACE = /\s+/;
			function _parseString (resultSet, str) {
				var array = str.split(SPACE);
				var length = array.length;

				for (var i = 0; i < length; ++i) {
					resultSet[array[i]] = true;
				}
			}

			function _parse (resultSet, arg) {
				if (!arg) return;
				var argType = typeof arg;

				// 'foo bar'
				if (argType === 'string') {
					_parseString(resultSet, arg);

				// ['foo', 'bar', ...]
				} else if (Array.isArray(arg)) {
					_parseArray(resultSet, arg);

				// { 'foo': true, ... }
				} else if (argType === 'object') {
					_parseObject(resultSet, arg);

				// '130'
				} else if (argType === 'number') {
					_parseNumber(resultSet, arg);
				}
			}

			function _classNames () {
				// don't leak arguments
				// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
				var len = arguments.length;
				var args = Array(len);
				for (var i = 0; i < len; i++) {
					args[i] = arguments[i];
				}

				var classSet = new StorageObject();
				_parseArray(classSet, args);

				var list = [];

				for (var k in classSet) {
					if (classSet[k]) {
						list.push(k)
					}
				}

				return list.join(' ');
			}

			return _classNames;
		})();

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	function outerHeight(el) {
	  var height = el.offsetHeight;
	  var style = getComputedStyle(el);

	  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	  return height;
	};

	function outerWidth(el) {
	  var width = el.offsetWidth;
	  var style = getComputedStyle(el);

	  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	  return width;
	};

/***/ }
/******/ ]);