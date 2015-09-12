var matrix = require('..');

var data = [
  ['名前', '年齢', '出身'],
  '-',
  ['tomas', '32', 'USA'],
  ['山下', '不明', '北海道', '釣り']
];

matrix(data);

console.log(matrix.toHtml(data));

console.log(matrix.toCsv(data));