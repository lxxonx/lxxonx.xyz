---
title: Javascript Prototype
tags: ["Javascript", "Object"]
summary: 자바스크립트의 프토로타입과 상속에 관하여
date: "2022-09-20"
cover: https://i.imgur.com/pUrhAdr.png
---

## Prototype-based Object oriented language

- javascript is, different from java/c#(class-based ool), a prototype-based object oriented language
- js uses prototype to implement inheritance

## Prototype

- every object in js has (at least) a prototype which has properties and methods

```js
var date = new Date(); // Date.prototype && Object.prototype
```

- when a function is declared, it can be a constructor for an object using "new" keyword in front of it
- also, Prototype Object is created for the function and we can access to the Ojbect using "prototype" property of the function
- Prototype Object has constructor and \_\_proto\_\_(Prototype Link) property
- \_\_proto\_\_(Prototype Link) points to the ancestor's Prototype Object

## reference

- [프로토타입](http://www.tcpschool.com/javascript/js_object_prototype)
- [[Javascript] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
