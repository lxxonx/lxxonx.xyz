---
linkTitle: DFS
title: DFS
---

```js
const solution = (arr, rootNode) => {
  const visited = new Array(arr.length).fill(false);
  const result = [];

  const dfs = (node) => {
    if (visited[node]) {
      return;
    }

    visited[node] = true;
    result.push(node);
    path[node].forEach((n) => {
      if (!visited[n]) {
        dfs(n);
      }
    });
  };
  dfs(rootNode);
  return result;
};
```
