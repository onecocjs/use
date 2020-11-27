---
title: useBoolean
nav:
  title: Hooks
  path: /hooks
group:
  title: Atom
  path: /atom
  order: 1
---

# useBoolean

优雅管理 `boolean` 值的 Hooks

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
type Return<T> = {
  state: T;
  toggle: (value?: T) => void;
};
function useToggle(): Return<D | R>;
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

| 参数   | 说明        | 类型                    | 必要 | 默认值 |
| ------ | ----------- | ----------------------- | ---- | ------ |
| state  | toggle 的值 | any                     | true | -      |
| toggle | 切换        | (value:boolean) => void | true | -      |
