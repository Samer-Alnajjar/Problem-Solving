interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    return this.length > 0 ? this.splice(-1)[0] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
