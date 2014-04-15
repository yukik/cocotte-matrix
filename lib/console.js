'use strict';

/**
 * コンソールに表形式で出力する
 * @method matrix
 * @param  {Array}  data
 */
var matrix = function matrix(data) {
		// 列幅
	var w = []
		// すべての列幅の合計
	  , max = 0
		// セルゲタ
	  , ws
		// わくゲタ 
	  , ls;

	// 最大列幅の調査
	data.forEach(function (item) {
		if (Array.isArray(item)) {
			item.forEach(function (x, i) {
				var len = width(x);
				w[i] = (w[i] || 0) < len ? len : w[i];
				if (max < w[i]) {
					max = w[i];
				}
			});
		}
	});

	ws = (new Array(max + 1)).join(' ');
	ls = (new Array(max + 1)).join('-');

	// 架線
	var line = '';
	w.forEach(function (x) {
		line += '+ ' + ls.substr(0, x) + ' ';
	});
	line += '+';

	console.log(line);

	// データ
	data.forEach(function (item) {
		if (Array.isArray(item)) {
			var s = '';
			item.forEach(function (x, i) {
				s += '| ' + x + ws.substr(0, w[i] - width(x)) + ' ';
			});
			for(var i = item.length, max = w.length; i < max; i++) {
				s += '| ' + ws.substr(0, w[i]) + ' ';
			}
			console.log(s + '|');
		} else {
			// line
			console.log(line);
		}
	});

	console.log(line);

	return null;
};

/**
 * (超簡易版)２バイト文字の幅を2倍にした文字の長さ
 * 半角カタカナや英語圏外の半角文字は調査していないので
 * 実際の表示幅と異なる場合があります
 * フォントは等倍である事を前提としています
 * @method width
 * @param  {String} val
 * @return {Number} width
 */
var width = function width (val) {
	if (typeof val !== 'string') {
		val = val + '';
	}
	var h = val.match(/[ -~]/g);
	return val.length * 2 - (h ? h.length : 0);
};

module.exports = exports = matrix;