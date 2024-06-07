type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let output = [],
        subArr = [],
        counter = size;

    if(size >= arr.length && arr.length > 0) return [arr];
    if(arr.length === 0) return [];

    for(let i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        --counter;


        if(counter === 0 || i === (arr.length - 1)) {
            output.push(subArr);
            counter = size;
            subArr = [];
        }
    }
    return output;
};
