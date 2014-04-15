'use strict';

/**
 * HTMLのtableを作成
 * @method html
 * @param  {Array} data
 */
var html = function html(data) {

	// html
	var h = '<table class="cocotteMatrix">\n';

	// 列数
	var max = data.reduce(function (x, y) {
		return Array.isArray(y) && x < y.length ? y.length : x;
	}, 0);

	// データ
	data.forEach(function (item, idx) {
		if (Array.isArray(item)) {
			h += '\t<tr>\n';
			var c = idx === 0 ? 'th' : 'td';
			for (var i = 0; i < max; i++) {
				h += '\t\t<' + c + '>' + sanitize(item[i]) + '</' + c + '>\n';
			}
			h += '\t</tr>\n';
		}
	});

	h += '</table>';

	return h;
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
	val = val.replace(/&/g,'&amp;');
	val = val.replace(/"/g,'&quot;');
	val = val.replace(/'/g,'&#039;');
	val = val.replace(/</g,'&lt;');
	val = val.replace(/>/g,'&gt;');
	val = val.replace(/\n/g,'<br />');
	return val ;
};

module.exports = exports = html;