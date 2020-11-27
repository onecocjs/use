---
title: usePersistFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Function
  path: /function
  order: 2
---

# usePersistFn

保证函数对象永远不会发生变化。

> 正常情况下，我们如果试图去缓存一个函数通常是通过 `useCallback` 来实现 ， 而当使用 `useCallback` 时存在 `deps` 的话，那么缓存的效果则并不是很理想。每当 `deps` 发生变化时，`useCallback` 创建的函数总是会重新创建。
>
> 并且由于 `useCallback` 的底层实现是基于 `useMemo` ， 而 `useMemo` 并不承诺永久缓存，在未来 React 可能会选择性的丢失一些缓存的值，进行重新计算。
>
> `usePersistFn` 可以保证函数地址永远不会变化

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
usePersistFn<T extends (...args: any[]) => any>( fn: T ):T
```

## 参数

| 参数 | 说明           | 类型      | 必要 | 默认值 |
| ---- | -------------- | --------- | ---- | ------ |
| fn   | 需要缓存的函数 | () => any | true | -      |

## 结果

一个全新的被`永久缓存`的函数对象
