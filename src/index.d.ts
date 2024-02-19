declare const createPromise: <T>(_?: T) => {
    promise: any;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
export { createPromise };
export default createPromise;
