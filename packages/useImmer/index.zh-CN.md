---
title: useImmer
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
---

# useImmer

一个基于 `immer` 来管理状态的 Hooks

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx">

## reducer 管理

<code src="./example/ExampleImmerReducer.tsx">

## PlainObject 管理

<code src="./example/ExampleImmerReducer.tsx">

## 签名

### useImmer

```ts
function useImmer<T extends object>(
  state: T,
): { state: T; update: (draft: T) => void };
```

### useImmerReducer

```ts
type Reducer<S = any, A = any> = (draftState: Draft<S>, action: A) => void;
function useImmerReducer<S = any, A = any>(
  initialState: S,
  reducer: Reducer<S, A>,
  initialAction?: any,
): { state: S; dispatch: <T>(arg: T) => T };
```

### useImmerMethod

```ts
type Action<P = undefined, M = undefined> = {
  type: string;
  payload?: P;
  meta?: M;
};
type Method<S> = {
  [name: string]: <A extends Action<any, any>>(state: S, action: A) => void;
};
function useImmerMethod<S, M extends Method<S>>(
  initialState: S,
  methodObject: M,
  initialAction?: any,
): {
  state: S;
  dispatch: (action: any) => any;
  actions: {
    [K in keyof M]: (
      payload?: Parameters<M[K]>[1]['payload'],
      meta?: Parameters<M[K]>[1]['meta'],
    ) => void;
  };
};
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

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Empty } from 'antd';
export default () => <Empty description="暂无数据" />;
```
