should = {};
should.to = should;
should.be = should;
should.been = should;
should.is = should;
should.that = should;
should.and = should;
should.has = should;
should.have = should;
should.with = should;
should.at = should;
should.of = should;
should.same = should;
should.not = should;
should.deep = should;
should.itself = should;

should.ok = true;
should.true = true;
should.false = false;
should.null = null;
should.undefined = undefined;
should.exist = true;
should.empty = false;
should.arguments = true;

Object.prototype.should = should;

should.a = function(type) {};

should.include = function(value) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.equal = function(value, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.eql = function(value, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.above = function(value, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.least = function(value, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.below = function(value, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.most = function(value, message) {};

/**
 * @param {number} start
 * @param {number} finish
 * @param {string} [message]
 */
should.within = function(start, finish, message) {};

/**
 * @param {*} constructor
 */
should.instanceof = function(constructor) {};

/**
 * @param {string} name
 * @param {*} [value]
 * @param {string} [message]
 */
should.property = function(name, value, message) {};

/**
 * @param {*} name
 * @param {string} [message]
 */
should.ownProperty = function(name, message) {};

/**
 * @param {*} value
 * @param {string} [message]
 */
should.length = function(value, message) {};

/**
 * @param {RegExp} regexp
 * @param {string} [message]
 */
should.match = function(regexp, message) {};

/**
 * @param {string} string
 * @param {string} [message]
 */
should.string = function(string, message) {};

/**
 * @param {string[]} keys
 */
should.keys = function(keys) {};

/**
 * @param {object} constructor
 * @param {object} expected
 * @param {string} [message]
 */
should.throw = function(constructor, expected, message) {};

/**
 * @param {function} method
 * @param {string} [message]
 */
should.respondTo = function(method, message) {};

/**
 * @param {function} method
 * @param {string} [message]
 */
should.satisfy = function(method, message) {};

/**
 * @param {number} expected
 * @param {number} delta
 * @param {string} [message]
 */
should.closeTo = function(expected, delta, message) {};

/**
 * @param {Array} set
 * @param {string} [message]
 */
should.members = function(set, message) {};