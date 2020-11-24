---
title: useTimeout
nav:
  title: Hooks
  path: /hooks
group:
  title: Atom
  path: /atom
  order: 1
---

# useTimeout

处理 `setTimeout` 计时器函数的 Hook。

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
useTimeout(fn: () => void,delay: number):void;
```

## 参数

| 参数  | 说明                 | 类型       | 必要 | 默认值 |
| ----- | -------------------- | ---------- | ---- | ------ |
| fn    | 需要执行逻辑的函数   | () => void | true | -      |
| delay | 延迟的具体时长（秒） | number     | true | -      |

## 结果

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
