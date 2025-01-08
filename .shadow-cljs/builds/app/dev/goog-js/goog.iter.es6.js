["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/iter/es6.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.iter.es6\");\n  goog.module.declareLegacyNamespace();\n  var GoogIterable = goog.require(\"goog.iter.Iterable\");\n  var GoogIterator = goog.require(\"goog.iter.Iterator\");\n  var ShimIterable = function() {\n  };\n  ShimIterable.prototype.__iterator__ = function() {\n  };\n  ShimIterable.prototype.toGoog = function() {\n  };\n  ShimIterable.prototype.toEs6 = function() {\n  };\n  ShimIterable.of = function(iter) {\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {\n      return iter;\n    } else if (typeof iter.next == \"function\") {\n      return new ShimIterableImpl(function() {\n        return iter;\n      });\n    } else if (typeof iter[Symbol.iterator] == \"function\") {\n      return new ShimIterableImpl(function() {\n        return iter[Symbol.iterator]();\n      });\n    } else if (typeof iter.__iterator__ == \"function\") {\n      return new ShimIterableImpl(function() {\n        return iter.__iterator__();\n      });\n    }\n    throw new Error(\"Not an iterator or iterable.\");\n  };\n  var ShimIterableImpl = function(func) {\n    this.func_ = func;\n  };\n  ShimIterableImpl.prototype.__iterator__ = function() {\n    return new ShimGoogIterator(this.func_());\n  };\n  ShimIterableImpl.prototype.toGoog = function() {\n    return new ShimGoogIterator(this.func_());\n  };\n  ShimIterableImpl.prototype[Symbol.iterator] = function() {\n    return new ShimEs6Iterator(this.func_());\n  };\n  ShimIterableImpl.prototype.toEs6 = function() {\n    return new ShimEs6Iterator(this.func_());\n  };\n  var ShimGoogIterator = function(iter) {\n    var $jscomp$super$this;\n    $jscomp$super$this = GoogIterator.call(this) || this;\n    $jscomp$super$this.iter_ = iter;\n    return $jscomp$super$this;\n  };\n  $jscomp.inherits(ShimGoogIterator, GoogIterator);\n  ShimGoogIterator.prototype.next = function() {\n    return this.iter_.next();\n  };\n  ShimGoogIterator.prototype.toGoog = function() {\n    return this;\n  };\n  ShimGoogIterator.prototype[Symbol.iterator] = function() {\n    return new ShimEs6Iterator(this.iter_);\n  };\n  ShimGoogIterator.prototype.toEs6 = function() {\n    return new ShimEs6Iterator(this.iter_);\n  };\n  var ShimEs6Iterator = function(iter) {\n    var $jscomp$super$this;\n    $jscomp$super$this = ShimIterableImpl.call(this, function() {\n      return iter;\n    }) || this;\n    $jscomp$super$this.iter_ = iter;\n    return $jscomp$super$this;\n  };\n  $jscomp.inherits(ShimEs6Iterator, ShimIterableImpl);\n  ShimEs6Iterator.prototype.next = function() {\n    return this.iter_.next();\n  };\n  exports = {ShimIterable:ShimIterable, ShimEs6Iterator:ShimEs6Iterator, ShimGoogIterator:ShimGoogIterator};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\n */\n\ngoog.module('goog.iter.es6');\ngoog.module.declareLegacyNamespace();\n\nconst GoogIterable = goog.require('goog.iter.Iterable');\nconst GoogIterator = goog.require('goog.iter.Iterator');\n\n\n/**\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\n * and providing `toGoog()` and `toEs6()` methods to get either kind\n * of iterator.  `ShimIterable.of()` is the primary entry point for\n * this library.  If it is given an iterable that is *not* also an\n * iterator, then it will inherit any reusability from its argument\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\n * will be one-shot).\n *\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\n * also implement one or the other iterator API.  Since they extend\n * `ShimIterable`, it is easy to convert back and forth between the two\n * APIs.  Any such conversion will expose a view to the same underlying\n * iterator, so elements pulled via one API will not be available from\n * the other.\n *\n * @interface\n * @extends {Iterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterable {\n  /** @return {!GoogIterator<VALUE>} */\n  __iterator__() {}\n\n  /** @return {!ShimGoogIterator<VALUE>} */\n  toGoog() {}\n\n  /** @return {!ShimEs6Iterator<VALUE>} */\n  toEs6() {}\n\n  /**\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\n   * @return {!ShimIterable}\n   * @template VALUE\n   */\n  static of(iter) {\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\n        iter instanceof ShimEs6Iterator) {\n      return iter;\n    } else if (typeof iter.next == 'function') {\n      return new ShimIterableImpl(\n          () => /** @type {!Iterator|!GoogIterator} */ (iter));\n    } else if (typeof iter[Symbol.iterator] == 'function') {\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\n    } else if (typeof iter.__iterator__ == 'function') {\n      return new ShimIterableImpl(\n          () => /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\n                    .__iterator__());\n    }\n    throw new Error('Not an iterator or iterable.');\n  }\n}\n\n\n/**\n * Concrete (private) implementation of a non-iterator iterable.  This is\n * separate from the iterator versions since it supports iterables that\n * are not \"one-shot\".\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterableImpl {\n  /** @param {function(): !Iterator<VALUE>} func */\n  constructor(func) {\n    /** @const @private */\n    this.func_ = func;\n  }\n\n  /** @override */\n  __iterator__() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  toGoog() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.func_());\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.func_());\n  }\n}\n\n\n/**\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\n * @extends {GoogIterator<VALUE>}\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimGoogIterator extends GoogIterator {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super();\n    this.iter_ = iter;\n  }\n\n  /**\n   * @override @see {!goog.iter.Iterator}\n   * @return {!IIterableResult<VALUE>}\n   */\n  next() {\n    return this.iter_.next();\n  }\n\n\n  /** @override */\n  toGoog() {\n    return this;\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n}\n\n\n/**\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\n * @implements {IteratorIterable<VALUE>}\n * @extends {ShimIterableImpl<VALUE>}\n * @template VALUE\n */\nclass ShimEs6Iterator extends ShimIterableImpl {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super(() => iter);\n    /** @const @private */\n    this.iter_ = iter;\n  }\n\n  /** @override */\n  next() {\n    return this.iter_.next();\n  }\n}\n\n\nexports = {\n  ShimIterable,\n  ShimEs6Iterator,\n  ShimGoogIterator,\n};\n","~:compiled-at",1736356612438,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.iter.es6.js\",\n\"lineCount\":82,\n\"mappings\":\"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\",\n\"sources\":[\"goog/iter/es6.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\\n */\\n\\ngoog.module('goog.iter.es6');\\ngoog.module.declareLegacyNamespace();\\n\\nconst GoogIterable = goog.require('goog.iter.Iterable');\\nconst GoogIterator = goog.require('goog.iter.Iterator');\\n\\n\\n/**\\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\\n * and providing `toGoog()` and `toEs6()` methods to get either kind\\n * of iterator.  `ShimIterable.of()` is the primary entry point for\\n * this library.  If it is given an iterable that is *not* also an\\n * iterator, then it will inherit any reusability from its argument\\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\\n * will be one-shot).\\n *\\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\\n * also implement one or the other iterator API.  Since they extend\\n * `ShimIterable`, it is easy to convert back and forth between the two\\n * APIs.  Any such conversion will expose a view to the same underlying\\n * iterator, so elements pulled via one API will not be available from\\n * the other.\\n *\\n * @interface\\n * @extends {Iterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterable {\\n  /** @return {!GoogIterator<VALUE>} */\\n  __iterator__() {}\\n\\n  /** @return {!ShimGoogIterator<VALUE>} */\\n  toGoog() {}\\n\\n  /** @return {!ShimEs6Iterator<VALUE>} */\\n  toEs6() {}\\n\\n  /**\\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\\n   * @return {!ShimIterable}\\n   * @template VALUE\\n   */\\n  static of(iter) {\\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\\n        iter instanceof ShimEs6Iterator) {\\n      return iter;\\n    } else if (typeof iter.next == 'function') {\\n      return new ShimIterableImpl(\\n          () => /** @type {!Iterator|!GoogIterator} */ (iter));\\n    } else if (typeof iter[Symbol.iterator] == 'function') {\\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\\n    } else if (typeof iter.__iterator__ == 'function') {\\n      return new ShimIterableImpl(\\n          () => /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\\n                    .__iterator__());\\n    }\\n    throw new Error('Not an iterator or iterable.');\\n  }\\n}\\n\\n\\n/**\\n * Concrete (private) implementation of a non-iterator iterable.  This is\\n * separate from the iterator versions since it supports iterables that\\n * are not \\\"one-shot\\\".\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterableImpl {\\n  /** @param {function(): !Iterator<VALUE>} func */\\n  constructor(func) {\\n    /** @const @private */\\n    this.func_ = func;\\n  }\\n\\n  /** @override */\\n  __iterator__() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toGoog() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n}\\n\\n\\n/**\\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\\n * @extends {GoogIterator<VALUE>}\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimGoogIterator extends GoogIterator {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super();\\n    this.iter_ = iter;\\n  }\\n\\n  /**\\n   * @override @see {!goog.iter.Iterator}\\n   * @return {!IIterableResult<VALUE>}\\n   */\\n  next() {\\n    return this.iter_.next();\\n  }\\n\\n\\n  /** @override */\\n  toGoog() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n}\\n\\n\\n/**\\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\\n * @implements {IteratorIterable<VALUE>}\\n * @extends {ShimIterableImpl<VALUE>}\\n * @template VALUE\\n */\\nclass ShimEs6Iterator extends ShimIterableImpl {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super(() => iter);\\n    /** @const @private */\\n    this.iter_ = iter;\\n  }\\n\\n  /** @override */\\n  next() {\\n    return this.iter_.next();\\n  }\\n}\\n\\n\\nexports = {\\n  ShimIterable,\\n  ShimEs6Iterator,\\n  ShimGoogIterator,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"GoogIterable\",\"require\",\"GoogIterator\",\"ShimIterable\",\"__iterator__\",\"toGoog\",\"toEs6\",\"of\",\"iter\",\"ShimIterableImpl\",\"ShimGoogIterator\",\"ShimEs6Iterator\",\"next\",\"Symbol\",\"iterator\",\"Error\",\"constructor\",\"func\",\"func_\",\"iter_\",\"exports\"]\n}\n"]