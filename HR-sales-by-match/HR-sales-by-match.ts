function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    let obj: { [key: string]: number } = {},
        pairs = 0;

    ar.forEach((sock: number) => {
        if (!obj[sock]) {
            obj[sock] = 1;
        } else {
            delete obj[sock];
            pairs++;
        }
    });
    return pairs;
}
