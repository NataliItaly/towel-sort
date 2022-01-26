
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    let arrSorted = [];
    if (matrix) {
     
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 !== 0) {
              matrix[i].reverse();
              console.log(matrix[i]);
          }
          console.log(matrix);
          for (let j = 0; j < matrix[i].length; j++) {
              arrSorted.push(matrix[i][j]);
          }
          
      }
    }
    else {
      return [];
    }
    console.log(arrSorted);
    

  return arrSorted;
}
