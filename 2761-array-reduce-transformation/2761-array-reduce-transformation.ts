type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let value = init;

    for(let i = 0 ; i < nums.length; i++) {
        value = fn((value), nums[i])
    }

    return value;
};