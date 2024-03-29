:signal_strength: [@iterable-iterator/sorted](https://iterable-iterator.github.io/sorted)
==

Iterable sorting for JavaScript.
See [docs](https://iterable-iterator.github.io/sorted/index.html).

```js
import {increasing} from '@total-order/primitive';
import {sorted} from '@iterable-iterator/sorted';
sorted(increasing, [3, 1, 2]); // 1 2 3

import {decreasing} from '@total-order/primitive';
import {range} from '@iterable-iterator/range';
sorted(decreasing, range(13)); // 12 11 10 9 8 ...
```

[![License](https://img.shields.io/github/license/iterable-iterator/sorted.svg)](https://raw.githubusercontent.com/iterable-iterator/sorted/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/sorted.svg)](https://www.npmjs.org/package/@iterable-iterator/sorted)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/sorted/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/sorted/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/sorted.svg)](https://github.com/iterable-iterator/sorted/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/sorted.svg)](https://github.com/iterable-iterator/sorted/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/sorted.svg)](https://www.npmjs.org/package/@iterable-iterator/sorted)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/sorted.svg)](https://codeclimate.com/github/iterable-iterator/sorted/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/sorted.svg)](https://codeclimate.com/github/iterable-iterator/sorted/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/sorted/main.svg)](https://codecov.io/gh/iterable-iterator/sorted)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/sorted.svg)](https://codeclimate.com/github/iterable-iterator/sorted/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/sorted/badge.svg)](https://iterable-iterator.github.io/sorted/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/sorted)](https://bundlephobia.com/result?p=@iterable-iterator/sorted)
