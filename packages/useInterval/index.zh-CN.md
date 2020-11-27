---
title: useInterval
nav:
  title: Hooks
  path: /hooks
group:
  title: Atom
  path: /atom
  order: 1
---

# useTimeout

处理 `setInterval` 计时器函数的 Hooks。

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 立即执行一次

<code src="./example/ExampleImmediate.tsx" />

## 签名

```ts
interface Options {
  /** 是否立即执行一次 */
  immediate?: boolean;
}
useInterval(fn: () => void,delay: number, options?: Options):void;
```

## 参数

| 参数    | 说明                 | 类型       | 必要  | 默认值 |
| ------- | -------------------- | ---------- | ----- | ------ |
| fn      | 需要执行逻辑的函数   | () => void | true  | -      |
| delay   | 延迟的具体时长（秒） | number     | true  | -      |
| options | 其他配置项           | `Options`  | false | -      |

### Options

| 参数      | 说明             | 类型    | 必要 | 默认值 |
| --------- | ---------------- | ------- | ---- | ------ |
| immediate | 是否立即执行一次 | boolean | true | false  |

## 结果

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
