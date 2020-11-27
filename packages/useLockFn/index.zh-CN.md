---
title: useLockFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Function
  path: /function
  order: 2
---

# useLockFn

用于给一个异步函数增加竞态锁，防止并发执行。

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
function useLockFn<T extends (...args: any[]) => Promise<R>>(fn: T): Promise<R>;
```

## 参数

| 参数 | 说明     | 类型                             | 必要 | 默认值 |
| ---- | -------- | -------------------------------- | ---- | ------ |
| fn   | 异步函数 | `(...args: any[]) => Promise<R>` | true | -      |

## 结果

`fn` 函数的返回值
