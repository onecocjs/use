---
title: useMemoized
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 1
---

# useMemoized

`useMemoized` 主要用以取代 `useMemo`

为什么我们需要取代 `useMemo` 呢 ， 我们来看一段 react 官方针对 `useMemo` 的描述

> You may rely on `useMemo` as a performance optimization, not as a semantic guarantee.
> In the future, React may choose to “forget” some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components.
> Write your code so that it still works without `useMemo` — and then add it to optimize performance.

由此我们可以得出，`useMemo` 并不是始终保存数据的缓存， 未来在某些场景下，即使 `deps` 并没有发生变化，也有可能会重新计算

## 代码演示

### 基础用法

## API

### 签名

```ts
function useMemoized<T>(factory: () => T, deps: any[] = []): T;
```

### 参数

| 参数    | 说明               | 类型      | 必要 | 默认值 |
| ------- | ------------------ | --------- | ---- | ------ |
| factory | 创建需要缓存的对象 | () => any | true | -      |
| deps    | 依赖项             | any[]     | true | -      |

### 结果

缓存的对象
