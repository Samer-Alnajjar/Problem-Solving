function transposeMatrix(matrix: any[][]): any[][] {
    let newMatrix: any[][] = [];
    for(let col = 0; col < matrix[0].length; col++) {
        let newRow: any[] = [];
        for(let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(transposeMatrix(matrix))
