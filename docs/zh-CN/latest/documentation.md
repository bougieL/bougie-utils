# 文档

## cloneDeep <Badge text='1.0.0+' />

```js
import { cloneDeep } from '@bougiel/utils'
```

- **说明**  
  递归拷贝 value，仅克隆可枚举属性。

- **类型**

```ts
declare const cloneDeep: <T>(source: T) => T
```

- **参数**  
  _`<T>(source: T)`_: 要深拷贝的值。

- **返回**  
  _`T`_: 返回拷贝后的值。

- **示例**

```js
const objects = [{ a: 1 }, { b: 2 }]
const deep = cloneDeep(objects)

assert.notStrictEqual(deep[0], objects[0])
```

## compose <Badge text='1.0.0+' />

```js
import { compose } from '@bougiel/utils'
```

- **说明**  
  组合多个函数。

- **类型**

```ts
declare const compose: (...funcs: Function[]) => Function
```

- **参数**  
  _`(...funcs: Function[])`_: 需要组合的函数。

- **返回**  
  _`Function`_: 组合后的函数。

- **示例**

```js
compose(
  funcA,
  funcB,
  funcC
)(...params)
// equal
funcA(funcB(funcC(...params)))
```

## dateFormat <Badge text='1.0.0+' />

```js
import { dateFormat } from '@bougiel/utils'
```

- **说明**  
  日期时间格式化。

- **类型**

```ts
declare type TDate = string | number | Date
declare const dateFormat: (date: TDate, formatter: string) => string
```

- **参数**  
  _`date: TDate`_: 日期字符串或时间戳或日期对象。  
  _`formatter: string`_: 格式化模板。

- **返回**  
  _`string`_: 格式化结果。

- **示例**

```js
const formattedDate = dateFormat(1569888000000, 'yyyy/MM/dd hh:mm:ss')

assert.strictEqual(formattedDate, '2019/10/01 08:00:00')
```

## get <Badge text='1.0.0+' />

```js
import { get } from '@bougiel/utils'
```

- **说明**  
  根据索引获取对象的值。

- **类型**

```ts
declare const get: (obj: object, path: string | string[]) => any
```

- **参数**  
  _`obj: object`_: 目标对象。  
  _`path: string | string[]`_: 索引字符串或数组。

- **返回**  
  _`any`_: 需要获取的 value。

- **示例**

```js
const obj = [{ a: { b: [{ c: 1 }] } }]
const value1 = get(obj, '0.a.b.0.c')
const value2 = get(obj, ['0', 'a', 'b', '0', 'c'])

assert.ok(value1 === 1 && value2 === 1)
```

## isEqual <Badge text='1.0.0+' />

```js
import { isEqual } from '@bougiel/utils'
```

- **说明**  
  判断两个对象是否相等。

- **类型**

```ts
declare const isEqual: (source: any, target: any) => boolean
```

- **参数**  
  _`source: any`_: 对象一。  
  _`target: any`_: 对象二。

- **返回**  
  _`boolean`_: 是否相等。

- **示例**

```js
const obj1 = [{ a: { b: [{ c: 1 }] } }]
const obj2 = [{ a: { b: [{ c: 1 }] } }]

assert.ok(obj1 !== obj2)
assert.ok(isEqual(obj1, obj2))
```

## set <Badge text='1.0.0+' />

```js
import { set } from '@bougiel/utils'
```

- **说明**  
  设置深层对象 value。

- **类型**

```ts
declare const set: (obj: object, path: string | string[], value: any) => void
```

- **参数**  
  _`obj: object`_: 需要设置 value 的对象。  
  _`path: string | string[]`_: key 索引，为字符串时用`.`隔开。
  _`value: any`_: 设置的 value 值。

- **返回**  
  空

- **示例**

```js
const obj = [{ a: { b: [{ c: 1 }] } }]

set(obj, '0.a.b.0.c', 2)
assert.strictEqual(obj[0].a.b[0].c, 2)

set(obj, ['0', 'a', 'b', '0', 'c'], 3)
assert.strictEqual(obj[0].a.b[0].c, 3)
```

## webpackMerge <Badge text='1.0.0+' />

```js
import { webpackMerge } from '@bougiel/utils'
```

::: warning
webpackMerge 会修改 base 对象。如果不想修改 base 对象，请先将 base 对象深克隆一份。
:::

- **说明**  
  合并两个对象。

- **类型**

```ts
declare const webpackMerge: (base: object, extend: object) => {} & object
```

- **参数**  
  _`base: object`_: 基础对象。  
  _`extend: object`_: 拓展对象。

- **返回**  
  _`{} & object`_: 合并结果。

- **示例**

```js
const source = {
  a: {
    b: [1],
    c: 2
  },
  d: [3, 4],
  e: 5
}
const target = {
  a: {
    b: [1, 2],
    c: 2
  },
  d: [3, 4, 6],
  e: 5
}

// rewrite
const extend1 = {
  'a.b': [1, 2],
  d: [3, 4, 6]
}
assert.deepStrictEqual(webpackMerge(cloneDeep(source), extend1), target)

// update
const extend2 = {
  'a.b': (prev) => [...prev, 2],
  d: (prev) => [...prev, 6]
}
assert.deepStrictEqual(webpackMerge(cloneDeep(source), extend2), target)
```
