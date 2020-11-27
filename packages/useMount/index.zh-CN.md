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

## 签名

```ts
useMount(fn: () => void);
```

## 参数

| 参数 | 说明               | 类型       | 必要 | 默认值 |
| ---- | ------------------ | ---------- | ---- | ------ |
| fn   | mount 时执行的函数 | () => void | true | -      |

## 结果

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
