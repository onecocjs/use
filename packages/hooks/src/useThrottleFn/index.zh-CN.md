---
title: useThrottleFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Atom
  path: /atom
  order: 1
---

# useThrottleFn

用来处理节流函数的 Hook。

## 代码演示

### 基础用法

<code src="./example/ExampleBasic.tsx" >

## API

### 签名

```typescript
interface ThrottleFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
  flush(): ReturnType<T> | undefined;
}

interface UseThrottleOptions {
  /** 指定调用在节流开始前 */
  leading?: boolean;
  /** 指定调用在节流结束后 */
  trailing?: boolean;
}

useThrottleFn<T extends (...args: any) => any>(
  fn: T,
  wait: number,
  options?: UseThrottleOptions,
):ThrottleFunc<T>
```

### 参数

| 参数    | 说明           | 类型                  | 必要  | 默认值 |
| ------- | -------------- | --------------------- | ----- | ------ |
| fn      | 需要节流的函数 | (...args: any) => any | true  | -      |
| wait    | 需要节流的毫秒 | number                | true  | -      |
| options | 其他配置项     | `Options`             | false | -      |

### Options

| 参数     | 说明                 | 类型    | 必要  | 默认值 |
| -------- | -------------------- | ------- | ----- | ------ |
| leading  | 指定调用在节流开始前 | boolean | false | true   |
| trailing | 指定调用在节流结束后 | boolean | false | true   |

### 结果

一个经过`节流处理`的函数，该函数的原型链上会挂载其他的辅助函数。

| 参数   | 说明             | 类型       | 必要 | 默认值 |
| ------ | ---------------- | ---------- | ---- | ------ |
| cancel | 取消函数的执行   | () => void | true | -      |
| flush  | 不等待，立即执行 | () => void | true | -      |

```

```
