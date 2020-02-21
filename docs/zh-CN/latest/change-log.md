# 更新日志

`bougie-utils` 严格遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范。

### 发布周期

修订版本号：用于进行 `bugfix` 更新，不定期发布。

次版本号：发布一个带有新特性的向下兼容的版本，不定期发布。

主版本号：含有破坏性更新和新特性，不定期发布。

## 1.5.2

- 🔧 修复：`ResizeObserve` 订阅时不触发的问题（[533cb47](https://github.com/bougieL/bougie-utils/commit/533cb47a9e735b4eb8f6fb0578fdd2c27d8f8ce8)）。

## 1.5.0

- 💄 新增：`objectMerge` 方法，同 `webpackMerge`。

## 1.4.1

- 🔧 修复：Tree Shaking 定位错误的问题。

## 1.4.0

- 💄 新增：`ScrollObserve` 类，用于监听元素滚动事件。

## 1.3.1

- 🔧 修复：添加 ES Module。

## 1.3.0

- 💄 新增：`getHostIP` 方法，用于 Node 端获取本机 IP。

## 1.2.0

- 💄 新增：`ResizeObserve` 类，用于监听窗口尺寸变化。
- 💄 新增：`ResponsiveObserve` 类，用于判断当前设备尺寸类型。

## 1.1.0

- 💄 新增：`EventEmitter` 类，用于发布订阅事件中心。

## 1.0.0

- 💄 新增：`Binder` 类，用于 `React` 双向绑定的输入控件。
- 💄 新增：`cloneDeep` 方法，深层次拷贝一个对象，仅拷贝可枚举属性。
- 💄 新增：`compose` 方法，组合多个函数。
- 💄 新增：`dateFormat` 方法，可格式化日期时间戳、字符串、日期对象。
- 💄 新增：`debounce` 方法，用户函数防抖。
- 💄 新增：`get` 方法，获取深层次对象 `value`。
- 💄 新增：`isEqual` 方法，判断两个对象是否相等，仅对比可枚举属性。
- 💄 新增：`set` 方法，设置深层次对象 `value`。
- 💄 新增：`throttle` 方法，用于函数节流。
- 💄 新增：`webpackMerge` 方法，用于合并两个对象。
