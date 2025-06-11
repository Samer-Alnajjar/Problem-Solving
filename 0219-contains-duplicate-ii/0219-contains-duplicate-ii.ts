function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let l = 0;
    let r = 0;
    const obj: { [key: number]: boolean } = {};

    while (r < nums.length) {
        if (r - l > k) {
            delete obj[nums[l]];
            l++;
        }

        if (obj[nums[r]]) {
            return true;
        }

        obj[nums[r]] = true;
        r++;
    }

    return false;
};