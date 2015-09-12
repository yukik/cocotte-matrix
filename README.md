cocotte-matrix
==========

# はじめに

配列を表形式に加工します

対応しているのは、次のとおりです

 + コンソールへ出力
 + HTMLのTABLEを作成
 + CSVを作成


# 例で使用する配列

```javascript
var data = [
  ['名前', '年齢', '出身'],
  '-',
  ['tomas', '32', 'USA'],
  ['山下', '不明', '北海道', '釣り']
];
```

# コンソールへの出力

```
var matrix = require('cocotte-matrix');
matrix(data);
```

次のようにコンソールに出力されます
配列以外の行は架線が出力されます
改行を含む行は一行目のみ出力されます

```
+ ----- + ---- + ------ + ---- +
| 名前  | 年齢 | 出身   |      |
+ ----- + ---- + ------ + ---- +
| tomas | 32   | USA    |      |
| 山下  | 不明 | 北海道 | 釣り |
+ ----- + ---- + ------ + ---- +
```

# HTMLのTABLEを作成

```javascript
var result = matrix.toHtml(data);
```

resultには次の文字列が設定されます
配列以外の行は無視されます
一行目のセルのタグはTHになりそれ以外はTDになります

```html
<table class="cocotteMatrix">
  <tr>
    <th>名前</th>
    <th>年齢</th>
    <th>出身</th>
    <th></th>
  </tr>
  <tr>
    <td>tomas</td>
    <td>32</td>
    <td>USA</td>
    <td></td>
  </tr>
  <tr>
    <td>山下</td>
    <td>不明</td>
    <td>北海道</td>
    <td>釣り</td>
  </tr>
</table>
```

# CSVを作成

```javascript
var result = matrix.toCsv(data);
```

resultには次の文字列が設定されます

```text
"名前","年齢","出身",""
"tomas","32","USA",""
"山下","不明","北海道","釣り"
```

