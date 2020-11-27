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

## 签名

```ts
useEffectOnce( fn: () => void | (() => void | undefined) )
```

## 参数

| 参数 | 说明        | 类型        | 必要        | 默认值      |
| ---- | ----------- | ----------- | ----------- | ----------- |
| fn   | effect 函数 | () => (void | (() => void | undefined)) | true | - |

## 结果

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
