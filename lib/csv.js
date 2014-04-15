'use strict';

/**
 * HTMLのtableを作成
 * @method csv
 * @param  {Array} data
 */
var csv = function csv(data) {

	// csv
	var c = '';

	// 列数
	var max = data.reduce(function (x, y) {
		return Array.isArray(y) && x < y.length ? y.length : x;
	}, 0);

	// データ
	data.forEach(function (item) {
		if (Array.isArray(item)) {
			for (var i = 0; i < max - 1; i++) {
				c += '"' + sanitize(item[i]) + '",';
			}
			if (max > 0) {
				c += '"' + sanitize(item[i]) + '"';
			}
			c += '\n';
		}
	});

	return c;
};

/**
 * 無害化
 * @method sanitize
 * @param  {String} val
 * @return {String} sanitizedVal
 */
var sanitize = function sanitize (val) {
	if (typeof val !== 'string') {
		return '';
	}
	val = val.replace(/\n/g,'\n');
	val = val.replace(/"/g,'""');
	return val ;
};

module.exports = exports = csv;