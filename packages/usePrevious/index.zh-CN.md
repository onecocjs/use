---
title: usePrevious
nav:
  title: Hooks
  path: /hooks
group:
  title: Atom
  path: /atom
  order: 1
---

# usePrevious

记录上一次的`状态`

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx">

## 签名

```ts
function usePrevious<T>(state: T): T;
```

## 参数

| 参数  | 说明           | 类型 | 必要 | 默认值 |
| ----- | -------------- | ---- | ---- | ------ |
| state | 需要记录的状态 | any  | true | -      |

## 结果

上次渲染的`状态`
