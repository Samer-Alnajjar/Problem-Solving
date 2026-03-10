function findFirstKMissPosNums(arr: number[], k: number) {
    let i = 0, outputs = [], extras = new Set()

    while(i < arr.length) {
        if(arr[i] !== arr[arr[i] - 1] && arr[i] <= arr.length && arr[i] > 0) {
            [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
        } else {
            i++
        }
    }

    i = 0;
    while(i < arr.length) {
        if(arr[i] !== i+1) {
            outputs.push(i+1)
            extras.add(arr[i])
        }
        if(outputs.length === k) {
            return outputs;
        }

        i++;
    }

    let current = arr.length + 1;
    while(outputs.length < k) {
        if(!extras.has(current)) {
            outputs.push(current)
        }
        current++;
    }

    return outputs;
}
