---
title: useEffectOnce
nav:
  title: Hooks
  path: /hooks
group:
  title: LifeCycle
  path: /life-cycle
  order: 1
---

# useEffectOnce

组件加载时 保证只运行一次的的 `Effect`

# 代码演示

## 基础用法

<code src="./example/Example01.tsx" />

# 函数签名

```ts
useEffectOnce( fn: () => void | (() => void | undefined) )
```
