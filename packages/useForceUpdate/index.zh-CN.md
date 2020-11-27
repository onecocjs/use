---
title: useForceUpdate
nav:
  title: Hooks
  path: /hooks
group:
  title: Function
  path: /function
  order: 2
---

# useForceUpdate

强制组件刷新 , 可以理解为 `class component` 中的 `this.forceUpdate()` 函数

# 代码演示

## 基础用法

<code src="./example/Example01.tsx" />

## 签名

```ts
useForceUpdate():() => void;
```

## 参数

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```

## 结果

一个可以让当前组件`强制渲染一次`的函数
