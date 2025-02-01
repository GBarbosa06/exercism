
export class Matrix {
    constructor(matrix) {
      this.matrix = matrix;
      this.matrixArray = matrix.split('\n')
      .map(row => row.split (' ').map(entry => +entry)
      );
    }
    get rows() {
      return this.matrixArray;
    }
    get columns() {
      const columnArray = this.matrixArray[0]
        .map((entry, index)=> this.matrixArray.map(row => row[index])
          );
        return columnArray;  
    }
  }