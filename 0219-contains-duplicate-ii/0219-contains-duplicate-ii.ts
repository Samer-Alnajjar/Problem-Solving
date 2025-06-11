function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let l = 0;
    let r = 0;
    const seen = new Set<number>();

    while (r < nums.length) {
        if (r - l > k) {
            seen.delete(nums[l]);
            l++;
        }

        if (seen.has(nums[r])) {
            return true;
        }

        seen.add(nums[r]);
        r++;
    }

    return false;
};