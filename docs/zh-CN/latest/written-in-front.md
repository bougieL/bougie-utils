# 写在前面

## 介绍

个人用的工具函数库，测试用例不全，不能保证可靠性 😓

## 安装

```bash
npm i @bougiel/utils -S
```

## 特性

- **简洁至上**  
  收集日常工作中最常用的工具函数，ES6 已实现的就不重复实现了。

- **TS 驱动**  
  享受 TS 类型约束、代码提示带来的好处。

- **全面测试**  
  每个方法保证至少有一个测试用例。

## 去除冗余（Tree Shaking）

- **使用简单写法**

::: tip
需要保证 webpack 版本大于等于 4
:::

```js
import { cloneDeep, compose, dateFormat } from '@bougiel/utils'
```

- **从文件引入**

```js
import { cloneDeep } from '@bouigel/utils/lib/cloneDeep'
import { compose } from '@bouigel/utils/lib/compose'
import { dateFormat } from '@bouigel/utils/lib/dateFormat'
```
