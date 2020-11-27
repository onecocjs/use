---
title: useToggle
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 1
---

# useToggle

两个值之前来回切换的 Hooks。

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
type State = boolean | number | string;
type Return<T> = {
  state: T;
  toggle: (value?: T) => void;
};
function useToggle<D extends State, R extends State>(
  defaultValue: D,
  reverseValue: R,
): Return<D | R>;
```

## 参数

| 参数         | 说明   | 类型 | 必要 | 默认值 |
| ------------ | ------ | ---- | ---- | ------ |
| defaultValue | 默认值 | any  | true | -      |
| reverseValue | 取反值 | any  | true | -      |

## 结果

| 参数   | 说明        | 类型       | 必要 | 默认值 |
| ------ | ----------- | ---------- | ---- | ------ |
| state  | toggle 的值 | any        | true | -      |
| toggle | 切换        | () => void | true | -      |
