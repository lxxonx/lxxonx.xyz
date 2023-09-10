---
title: Javascript GCD
linkTitle: GCD
weight: 2
---

```js
const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
```
