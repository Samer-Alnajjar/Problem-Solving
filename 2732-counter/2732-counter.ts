function createCounter(n: number): () => number {
    let num = n;
    
    return function() {
        return num++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */