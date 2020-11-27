---
title: useMap
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 1
---

# useMap

内部维护一个 `Map` 对象的 Hooks。

> 为什么我们需要 `Map` 对象？
>
> - Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值
>
> - 一个 `Map` 对象在迭代时会根据对象中元素的插入顺序来进行 — 一个 for...of 循环在每次迭代后会返回一个形式为`[key，value]`的数组。
>
> - `Map` 对象正常的 `get` `set` 操作，对象本身的引用并没有发生改变，并不会触发组件的渲染
>
> 更多内容可以查阅 [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

# 代码演示

## 基础用法

<code src="./example/ExampleBasic.tsx" />

## 签名

```ts
interface Return<K, V> {
  mapState: Map<K, V>;
  set: (key: K, value: V) => Map<K, V>;
  get: (key: K) => V;
  del: (key: K) => Map<K, V>;
  reset: () => Map<K, V>;
}
function useMap<K, V>(initialState?: [K, V][]): Return<K, V>;
```

## 参数

| 参数         | 说明       | 类型 | 必要  | 默认值 |
| ------------ | ---------- | ---- | ----- | ------ |
| initialState | 初始化参数 | [][] | false | -      |

## 结果

| 参数     | 说明                | 类型                                 | 必要  | 默认值 |
| -------- | ------------------- | ------------------------------------ | ----- | ------ |
| mapState | 内部维护的 Map 对象 | Map                                  | true  | -      |
| set      | set 函数            | <K,V>(key: K, value: V) => Map<K, V> | true  | -      |
| get      | get 函数            | <K,V>(key: K) => V                   | true  | -      |
| del      | del 函数            | <K,V>(key: K) => Map<K, V>           | false | -      |
| reset    | reset 重置函数      | <K,V>() => Map<K, V>                 | false | -      |
