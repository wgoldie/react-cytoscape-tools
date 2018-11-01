(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.npmPackageES6Boilerplate = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	}
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var xyPos = propTypes.shape({
	  x: propTypes.number.isRequired,
	  y: propTypes.number.isRequired
	});
	var anyElementPropTypes = {
	  scratch: propTypes.object,
	  position: xyPos,
	  selected: propTypes.bool,
	  locked: propTypes.bool,
	  grabbable: propTypes.bool,
	  classes: propTypes.string
	};
	var cyId = propTypes.oneOfType([propTypes.number, propTypes.string]);
	var cyEdge = propTypes.shape(_objectSpread({}, anyElementPropTypes, {
	  group: function group(prop) {
	    return prop === 'edges';
	  },
	  data: propTypes.shape({
	    id: cyId,
	    parent: cyId,
	    source: cyId.isRequired,
	    target: cyId.isRequired
	  })
	}));
	var cyNode = propTypes.shape(_objectSpread({}, anyElementPropTypes, {
	  group: function group(prop) {
	    return prop === 'nodes';
	  },
	  data: propTypes.shape({
	    id: cyId,
	    parent: cyId
	  })
	}));
	var cyGenericElement = propTypes.shape({
	  group: function group(props, propName, componentName) {
	    if (props.group) {
	      return new Error("Invalid element json with group '".concat(props.group, "'supplied to ").concat(componentName, ".\n        Group must be 'nodes', 'edges', or undefined,\n        and edges must have source and target properties."));
	    }

	    return undefined;
	  }
	});
	var cyElement = propTypes.oneOfType([cyEdge, cyNode, cyGenericElement]);
	var cyLayout = propTypes.shape({
	  name: propTypes.string.isRequired
	});
	var cyStyle = propTypes.oneOfType([propTypes.shape({
	  selector: propTypes.string.isRequired,
	  style: propTypes.object.isRequired
	}), propTypes.string, propTypes.func]);
	var cyJSON = propTypes.shape({
	  container: propTypes.instanceOf(Element),
	  elements: propTypes.arrayOf(cyElement),
	  layout: cyElement,
	  style: propTypes.arrayOf(cyStyle),
	  zoom: xyPos,
	  minZoom: propTypes.number,
	  maxZoom: propTypes.number,
	  zoomingEnabled: propTypes.bool,
	  panningEnabled: propTypes.bool,
	  userPanningEnabled: propTypes.bool,
	  boxSelectionEnabled: propTypes.bool,
	  selectionType: propTypes.oneOf(['single', 'additive']),
	  touchTapThreshold: propTypes.number,
	  desktopTapThreshold: propTypes.number,
	  autolock: propTypes.bool,
	  autoungrabify: propTypes.bool,
	  autounselectify: propTypes.bool,
	  headless: propTypes.bool,
	  styleEnabled: propTypes.bool,
	  hideEdgesOnViewport: propTypes.bool,
	  hideLabelsOnViewport: propTypes.bool,
	  textureOnViewport: propTypes.bool,
	  motionBlur: propTypes.bool,
	  motionBlurOpacity: propTypes.number,
	  wheelSensitivity: propTypes.number,
	  pixelRatio: propTypes.oneOfType([propTypes.oneOf(['auto']), propTypes.number])
	});
	var CytoscapePropTypes = {
	  cyId: cyId,
	  cyJSON: cyJSON,
	  cyNode: cyNode,
	  cyEdge: cyEdge,
	  cyElement: cyElement,
	  cyLayout: cyLayout,
	  cyStyle: cyStyle
	};

	var InternalPropTypes = {
	  style: propTypes.shape({})
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	var CytoscapeContext = React__default.createContext({
	  cy: null,
	  setCy: function setCy() {}
	});

	var _jsxFileName = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeElement/presentation.jsx";

	var CytoscapeElementPresentation = function CytoscapeElementPresentation(_ref) {
	  var cyRef = _ref.cyRef,
	      style = _ref.style,
	      className = _ref.className,
	      children = _ref.children;
	  return React__default.createElement("div", {
	    style: style,
	    className: className,
	    id: "cy",
	    ref: cyRef,
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 11
	    },
	    __self: this
	  }, children);
	};

	CytoscapeElementPresentation.propTypes = {
	  cyRef: propTypes.shape({
	    current: propTypes.object
	  }).isRequired,
	  style: InternalPropTypes.style.isRequired,
	  className: propTypes.string.isRequired,
	  children: propTypes.node.isRequired
	};

	/*
	 * Attaches the given cytoscape library
	 * instance to the given element
	 */

	var attachCytoscape = function attachCytoscape(cytoscape, element, initJSON) {
	  return cytoscape(_objectSpread({
	    container: element
	  }, initJSON));
	};

	var CytoscapeElementContainer =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(CytoscapeElementContainer, _React$Component);

	  function CytoscapeElementContainer(props) {
	    var _this;

	    _classCallCheck(this, CytoscapeElementContainer);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(CytoscapeElementContainer).call(this, props));
	    _this.cyRef = React__default.createRef();
	    return _this;
	  }

	  _createClass(CytoscapeElementContainer, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var cyNode = this.cyRef.current;
	      var _this$props = this.props,
	          cytoscape = _this$props.cytoscape,
	          cyInitJSON = _this$props.cyInitJSON;
	      var cy = attachCytoscape(cytoscape, cyNode, cyInitJSON);
	      this.context.setCy(cy);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var cyRef = this.cyRef;
	      var _this$props2 = this.props,
	          style = _this$props2.style,
	          className = _this$props2.className,
	          children = _this$props2.children;
	      return CytoscapeElementPresentation({
	        cyRef: cyRef,
	        style: style,
	        className: className,
	        children: children
	      });
	    }
	  }]);

	  return CytoscapeElementContainer;
	}(React__default.Component);

	CytoscapeElementContainer.contextType = CytoscapeContext;
	CytoscapeElementContainer.defaultProps = {
	  cytoscape: require('cytoscape'),
	  // eslint-disable-line global-require
	  cyInitJSON: {},
	  style: {},
	  className: '',
	  children: React__default.createElement('div')
	};
	CytoscapeElementContainer.propTypes = {
	  cytoscape: propTypes.func,
	  cyInitJSON: CytoscapePropTypes.cyJSON,
	  style: InternalPropTypes.style,
	  className: propTypes.string,
	  children: propTypes.node
	};

	var CytoscapeController =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(CytoscapeController, _React$Component);

	  function CytoscapeController() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, CytoscapeController);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CytoscapeController)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _this.updateCytoscape = function (oldProps) {
	      var cyJSON = _this.props.cyJSON;

	      if (oldProps.cyJSON !== cyJSON) {
	        _this.context.cy.json(cyJSON);
	      }
	    };

	    return _this;
	  }

	  _createClass(CytoscapeController, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(oldProps) {
	      this.updateCytoscape(oldProps);
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.updateCytoscape({});
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return CytoscapeController;
	}(React__default.Component);

	CytoscapeController.defaultProps = {
	  cyJSON: {},
	  children: React__default.createElement('div')
	};
	CytoscapeController.propTypes = {
	  cyJSON: CytoscapePropTypes.cyJSON,
	  children: propTypes.node
	};
	CytoscapeController.contextType = CytoscapeContext;

	var CytoscapeGate =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(CytoscapeGate, _React$Component);

	  function CytoscapeGate() {
	    _classCallCheck(this, CytoscapeGate);

	    return _possibleConstructorReturn(this, _getPrototypeOf(CytoscapeGate).apply(this, arguments));
	  }

	  _createClass(CytoscapeGate, [{
	    key: "render",
	    value: function render() {
	      return this.context.cy ? this.props.children : this.props.gateComponent;
	    }
	  }]);

	  return CytoscapeGate;
	}(React__default.Component);

	CytoscapeGate.defaultProps = {
	  gateComponent: React__default.createElement('div')
	};
	CytoscapeGate.propTypes = {
	  children: propTypes.node.isRequired,
	  gateComponent: propTypes.node
	};
	CytoscapeGate.contextType = CytoscapeContext;

	var _jsxFileName$1 = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeView.jsx";

	var CytoscapeView =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(CytoscapeView, _React$Component);

	  function CytoscapeView() {
	    _classCallCheck(this, CytoscapeView);

	    return _possibleConstructorReturn(this, _getPrototypeOf(CytoscapeView).apply(this, arguments));
	  }

	  _createClass(CytoscapeView, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(oldProps) {
	      var cyJSON = this.props.cyJSON;

	      if (oldProps.cyJSON !== cyJSON) {
	        // Have to call this twice because of cytoscape bug
	        // https://github.com/cytoscape/cytoscape.js/issues/2210
	        this.context.cy.json(cyJSON);
	        this.context.cy.json(cyJSON);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          cytoscape = _this$props.cytoscape,
	          cyInitJSON = _this$props.cyInitJSON,
	          cyJSON = _this$props.cyJSON,
	          style = _this$props.style,
	          className = _this$props.className,
	          children = _this$props.children;
	      return React__default.createElement(React.Fragment, {
	        __source: {
	          fileName: _jsxFileName$1,
	          lineNumber: 32
	        },
	        __self: this
	      }, React__default.createElement(CytoscapeElementContainer, {
	        cytoscape: cytoscape,
	        cyInitJSON: cyInitJSON || cyJSON,
	        style: style,
	        className: className,
	        __source: {
	          fileName: _jsxFileName$1,
	          lineNumber: 33
	        },
	        __self: this
	      }, children), React__default.createElement(CytoscapeGate, {
	        __source: {
	          fileName: _jsxFileName$1,
	          lineNumber: 41
	        },
	        __self: this
	      }, React__default.createElement(CytoscapeController, {
	        __source: {
	          fileName: _jsxFileName$1,
	          lineNumber: 42
	        },
	        __self: this
	      })));
	    }
	  }]);

	  return CytoscapeView;
	}(React__default.Component);

	CytoscapeView.defaultProps = {
	  cytoscape: require('cytoscape'),
	  // eslint-disable-line global-require
	  cyInitJSON: {},
	  cyJSON: {},
	  style: {},
	  className: '',
	  children: React__default.createElement('div')
	};
	CytoscapeView.propTypes = {
	  cytoscape: propTypes.func,
	  cyInitJSON: CytoscapePropTypes.cyJSON,
	  cyJSON: CytoscapePropTypes.cyJSON,
	  style: InternalPropTypes.style,
	  className: propTypes.string,
	  children: propTypes.node
	};
	CytoscapeView.contextType = CytoscapeContext;

	var _jsxFileName$2 = "/home/wgoldie/Documents/react-cytoscape-tools/src/CytoscapeProvider.jsx";

	var CytoscapeProvider =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(CytoscapeProvider, _React$Component);

	  function CytoscapeProvider(props) {
	    var _this;

	    _classCallCheck(this, CytoscapeProvider);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(CytoscapeProvider).call(this, props));

	    _this.handleSetCy = function (cy) {
	      return _this.setState({
	        cy: cy
	      });
	    };

	    _this.state = {
	      cy: null
	    };
	    return _this;
	  }

	  _createClass(CytoscapeProvider, [{
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	      var handleSetCy = this.handleSetCy;
	      var cy = this.state.cy;
	      var value = {
	        cy: cy,
	        setCy: handleSetCy
	      };
	      return React__default.createElement(CytoscapeContext.Provider, {
	        value: value,
	        __source: {
	          fileName: _jsxFileName$2,
	          lineNumber: 19
	        },
	        __self: this
	      }, children);
	    }
	  }]);

	  return CytoscapeProvider;
	}(React__default.Component);

	CytoscapeProvider.propTypes = {
	  children: propTypes.node.isRequired
	};

	var _jsxFileName$3 = "/home/wgoldie/Documents/react-cytoscape-tools/src/Cytoscape.jsx";

	var Cytoscape = function Cytoscape(_ref) {
	  var cytoscape = _ref.cytoscape,
	      cyJSON = _ref.cyJSON,
	      cyInitJSON = _ref.cyInitJSON,
	      style = _ref.style,
	      className = _ref.className,
	      children = _ref.children;
	  return React__default.createElement(CytoscapeProvider, {
	    __source: {
	      fileName: _jsxFileName$3,
	      lineNumber: 16
	    },
	    __self: this
	  }, React__default.createElement(CytoscapeView, {
	    cytoscape: cytoscape,
	    cyJSON: cyJSON,
	    cyInitJSON: cyInitJSON,
	    style: style,
	    className: className,
	    __source: {
	      fileName: _jsxFileName$3,
	      lineNumber: 17
	    },
	    __self: this
	  }, children));
	};

	Cytoscape.defaultProps = {
	  cytoscape: require('cytoscape'),
	  // eslint-disable-line global-require
	  cyInitJSON: {},
	  cyJSON: {},
	  style: {},
	  className: '',
	  children: React__default.createElement('div')
	};
	Cytoscape.propTypes = {
	  cytoscape: propTypes.func,
	  cyInitJSON: CytoscapePropTypes.cyJSON,
	  cyJSON: CytoscapePropTypes.cyJSON,
	  style: InternalPropTypes.style,
	  className: propTypes.string,
	  children: propTypes.node
	};

	exports.default = Cytoscape;
	exports.CytoscapeProvider = CytoscapeProvider;
	exports.CytoscapeGate = CytoscapeGate;
	exports.CytoscapeView = CytoscapeView;
	exports.CytoscapeElement = CytoscapeElementContainer;
	exports.CytoscapeController = CytoscapeController;
	exports.CytoscapePropTypes = CytoscapePropTypes;
	exports.CytoscapeContext = CytoscapeContext;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
