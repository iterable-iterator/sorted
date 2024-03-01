import test from 'ava';

import {tee} from '@iterable-iterator/tee';
import * as primitive from '@total-order/primitive';

import {sorted} from '#module';

const increasing = (a, b) => primitive.increasing(a, b);
const decreasing = (a, b) => primitive.decreasing(a, b);

const macro = (t, compare, array) => {
	const [reference, input] = tee(array, 2);

	const output = sorted(compare, input);
	const expected = Array.from(reference).sort(compare);

	t.not(output, input, 'check that output is not the same object as input');
	t.is(output.length, expected.length, 'length check');
	t.deepEqual(output, expected, 'check that output is as expected');
};

macro.title = (title, compare, array) =>
	title ?? `sorted(${compare.name}, ${JSON.stringify(array)})`;

for (const compare of [increasing, decreasing]) {
	const array = [];

	const n = 100;

	for (let i = n; i--; ) {
		array.push(Math.random());
	}

	test(macro, compare, array);
}
