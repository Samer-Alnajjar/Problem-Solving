type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let org = init;
    return {
        increment: () => {
            return ++org;
        },
        reset: () => {
            org = init;
            return org;
        },
        decrement: () => {
            return --org;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */