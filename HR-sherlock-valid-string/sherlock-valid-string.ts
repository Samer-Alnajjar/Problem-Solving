function isValid(s: string): string {
    let obj:{[key: string]: number} = {},
        arr: number[] = [];

    for(const char of s) {
        obj[char] = (obj[char] || 0) + 1;
    }

    arr = Object.values(obj);
    arr.sort((a, b) => a-b);

    if(arr[0] - arr[arr.length -1] == 0) return "YES";
    if(arr[0] - arr[arr.length - 1] <= 1 && arr[arr.length - 1] - arr[1] == 0) return "YES";
    if(arr[0] - arr[1] == 0 && arr[arr.length - 2] - arr[1] == 0 && arr[arr.length - 1] - arr[arr.length - 2] == 1) return "YES";

    return "NO"
}
