---
title: useDebounceFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Function
  path: /function
  order: 2
---

# useDebounceFn

用来处理防抖函数的 Hook。

## 代码演示

### 基础用法

<code src="./example/ExampleBasic.tsx" />

### 取消函数

<code src="./example/ExampleCancel.tsx" />

### 立即执行

<code src="./example/ExampleFlush.tsx" />

### 指定在延迟开始前调用

<code src="./example/ExampleLeading.tsx" />

## API

### 签名

```typescript
interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
  flush(): ReturnType<T> | undefined;
}

interface UseDebounceFnOptions {
  /** 指定在延迟开始前调用。 */
  leading?: boolean;
  /** 指定在延迟结束后调用。 */
  trailing?: boolean;
}

useDebounceFn<T extends (...args: any) => any>(fn: () => void,wait:number,options?: UseDebounceFnOptions):DebouncedFunc<T>;
```

### 参数

| 参数    | 说明             | 类型                  | 必要  | 默认值 |
| ------- | ---------------- | --------------------- | ----- | ------ |
| fn      | 需要防抖的函数   | (...args: any) => any | true  | -      |
| wait    | 需要延迟的毫秒数 | number                | true  | -      |
| options | 其他配置项       | `Options`             | false | -      |

### Options

| 参数     | 说明                 | 类型    | 必要  | 默认值 |
| -------- | -------------------- | ------- | ----- | ------ |
| leading  | 指定在延迟开始前调用 | boolean | false | false  |
| trailing | 指定在延迟结束后调用 | boolean | false | true   |

### 结果

一个经过`防抖处理`的函数，该函数的原型链上会挂载其他的辅助函数。

| 参数   | 说明             | 类型       | 必要 | 默认值 |
| ------ | ---------------- | ---------- | ---- | ------ |
| cancel | 取消函数的执行   | () => void | true | -      |
| flush  | 不等待，立即执行 | () => void | true | -      |

```

```
