# createPromise

## example

- ts

```ts
import { createPromise } from '@mxy_c/g-promise';

const { promise, resolve, reject } = createPromise<number>();

promise.then(
  val => {
    console.log('resole');
    console.log(val);
  },
  reason => {
    console.log('reject');
    console.log(reason);
  }
);

resolve(1);
```

- js

```js
import { createPromise } from '@mxy_c/g-promise';

const { promise, resolve, reject } = createPromise(0);

promise.then(
  val => {
    console.log('resole');
    console.log(val);
  },
  reason => {
    console.log('reject');
    console.log(reason);
  }
);

resolve(22);
```
