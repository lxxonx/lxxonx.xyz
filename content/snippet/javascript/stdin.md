---
title: Javascript stdin
linkTitle: stdin
weight: 1
---

```js
// 줄바꿈으로 구분된 문자열 처리
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n"); // .split(" "); // 공백으로 구분된 문자열 처리
```

```js
// 줄바꿈으로 구분된 숫자 처리
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n") // .split(" "); // 공백으로 구분된 숫자 처리
  .map(Number);
```
