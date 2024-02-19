var createPromise = function (_) {
  var resolve;
  var reject;
  var promise = new Promise(function (resolveFn, rejectFn) {
    resolve = resolveFn;
    reject = rejectFn;
  });
  return { promise: promise, resolve: resolve, reject: reject };
};

export { createPromise };
export default createPromise;
