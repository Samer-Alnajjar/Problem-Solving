async function sleep(millis: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success) {
                resolve(console.log(millis))
            } else {
                reject("Promise failed")
            }
        }, millis)
    })
    
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */