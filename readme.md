# Bougie Utils

[![npm version](https://badge.fury.io/js/%40bougiel%2Futils.svg)](https://www.npmjs.com/package/@bougiel/utils)

## Introduction

Personal utils collection.

## Features

- **Simplicity is paramount**  
  Collecting the most commonly used tool functions in daily work, ES6 has been implemented without duplication.

- **Written by TypeScript**  
  Enjoy the benefits of TS type constraints and code hints.

- **Comprehensive test**  
  Each method guarantees at least one test case.

## Installation

```bash
npm i @bougiel/utils -S
```

## Tree Shaking

- **Using Simple Writing**

> You need to ensure that the version of webpack is greater than or equal to 4.

```js
import { Binder, cloneDeep, compose, dateFormat } from '@bougiel/utils'
```

- **Import From Files**

```js
import { Binder } from '@bougiel/utils/lib/Binder'
import { cloneDeep } from '@bouigel/utils/lib/cloneDeep'
import { compose } from '@bouigel/utils/lib/compose'
import { dateFormat } from '@bouigel/utils/lib/dateFormat'
```

## Documentation

[Documentation](https://bougiel.github.io/bougie-utils/)

## Change Log

[Change Log](https://bougiel.github.io/bougie-utils/change-log)

## License

[MIT](./LICENSE)
