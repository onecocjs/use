---
title: useMount
nav:
  title: Hooks
  path: /hooks
group:
  title: LifeCycle
  path: /life-cycle
  order: 2
---

# useMount

只在组件 `mount` 时执行

> 注意，与`useEffectOnce`的区别是：在 `useMount` 的入参函数中，如果返回一个函数的话，并不会在函数卸载的时候去执行

# 代码演示

## 基础用法

<code src="./example/Example01.tsx" />

# 函数签名

```ts
useMount(fn: () => void);
```
