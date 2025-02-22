function generatePascalsTriangle(rows) {
    let triangle = [];
    
    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
        triangle[i][i] = 1;
    }
    
    return triangle;
}

function printPascalsTriangle(rows) {
    let triangle = generatePascalsTriangle(rows);

    for(i = 0; i < rows.length; i++){

    }
    
    for (let row of triangle) {
        let linha = row.join(' ')
        console.log(linha);


    }
}

printPascalsTriangle(10);