---
title: forEach와 map의 차이점
tags: ["Javascript", "function"]
summary: Javascript의 배열 iterator인 forEach와 Map메소드의 차이점
date: "2022-08-19"
cover: https://i.imgur.com/pUrhAdr.png
---

## TL;DR

- `forEach`: return 값 없음
- `map`: 재가공된 함수를 리턴

## 설명

자바스크립트에는 `Array`클래스에 내장되어 있는 대표적인 iterator 매소드가 두가지 있다. 첫번째는 `forEach`메소드이며 두번째는 `map`메소드이다. 두 메소드의 차이점을 지금부터 알아보자

1. `forEach`메소드

가장 기본적인 Array Iterator 메소드이다. `Array`의 각 엘리먼트들을 돌아가면서 주어진 함수를 실행한다. 중요한 부분은 forEach에는 반환 값이 존재하지 않는다.

2. `map`메소드

forEach와 마찬가지로 기본적으로 `Array`의 각 엘리먼트들을 돌아가면서 주어진 함수를 수행한다. 하지만, `forEach`메소드와는 다르게, `map`메소드는 주어진 함수들의 반환값들을 배열로 묶어서 반환한다. 즉, 주어진 함수로 재가공된 배열을 반환한다.

### Reference

- [JavaScript map vs. forEach: When to Use Each One](https://code.tutsplus.com/tutorials/javascript-map-vs-foreach-when-to-use-each-one--cms-38365)
