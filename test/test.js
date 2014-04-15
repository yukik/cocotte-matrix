var assert = require('assert');

var matrix = require('../matrix');

var data = [
	['a', 'b', 'c']
  , '-'
  , ['a1', 'b1', 'c1']
  , ['a2', 'b2']
  , ['\n', '\'', '\"']
  , ['<', '>', '&']
];

var result, eq;

result = matrix(data);
assert(result === null);

result = matrix(data, 'html');
eq = ['<table class="cocotteMatrix">',
		'\t<tr>',
		'\t\t<th>a</th>',
		'\t\t<th>b</th>',
		'\t\t<th>c</th>',
		'\t</tr>',
		'\t<tr>',
		'\t\t<td>a1</td>',
		'\t\t<td>b1</td>',
		'\t\t<td>c1</td>',
		'\t</tr>',
		'\t<tr>',
		'\t\t<td>a2</td>',
		'\t\t<td>b2</td>',
		'\t\t<td></td>',
		'\t</tr>',
		'\t<tr>',
		'\t\t<td><br /></td>',
		'\t\t<td>&#039;</td>',
		'\t\t<td>&quot;</td>',
		'\t</tr>',
		'\t<tr>',
		'\t\t<td>&lt;</td>',
		'\t\t<td>&gt;</td>',
		'\t\t<td>&amp;</td>',
		'\t</tr>',
		'</table>'].join('\n');

assert(result === eq);

result = matrix(data, 'csv');
eq = ['"a","b","c"',
		'"a1","b1","c1"',
		'"a2","b2",""',
		'"\n","\'",""""',
		'"<",">","&"',
		''].join('\n');

assert(result === eq);



