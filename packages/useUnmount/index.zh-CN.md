---
title: useUnmount
nav:
  title: Hooks
  path: /hooks
group:
  title: LifeCycle
  path: /life-cycle
  order: 2
---

# useUnmount

只在组件 `unmount` 时执行

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
useUnmount(fn: () => void);
```

## 参数

| 参数 | 说明                 | 类型       | 必要 | 默认值 |
| ---- | -------------------- | ---------- | ---- | ------ |
| fn   | unmount 时执行的函数 | () => void | true | -      |

## 结果

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
