
'use strict';

module.exports = exports = function matrix(data, type) {

	type = typeof type === 'string' && /^[a-z]{1,10}$/.test(type) ? type : 'console';

	var fn = require('./lib/' + type);

	return fn(data);

};
