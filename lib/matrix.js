/*
 * @license
 * cocotte-matrix v0.2.0
 * Copyright(c) 2013 Yuki Kurata <yuki.kurata@gmail.com>
 * MIT Licensed
 */
var def = require('./console');

module.exports = matrix;

// クライアント用
if (typeof window === 'object') {
  if (!window.Cocotte){
    window.Cocotte = {};
  }
  window.Cocotte.matrix = matrix;
}

function matrix(data) {
  return def(data);
}

matrix.console = def;
matrix.toHtml = require('./html');
matrix.toCsv = require('./csv');