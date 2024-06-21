function countingValleys(steps: number, path: string): number {
    let valleysCount = 0,
        seaLvl = 0;

    for(const step of path) {
        if(step === "D") {
            seaLvl--;
        } else {
            seaLvl++;
            if(seaLvl === 0) {
                valleysCount++;
            }
        }
    }

    return valleysCount;
}

