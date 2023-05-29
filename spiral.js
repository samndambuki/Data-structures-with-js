function generateSpiralNumbers(n) {
    const matrix = [];
    let num = 1;
    let topRow = 0, bottomRow = n - 1;
    let leftCol = 0, rightCol = n - 1;
    
    while (num <= n * n) {
      // Traverse right
      for (let i = leftCol; i <= rightCol; i++) {
        matrix[topRow] = matrix[topRow] || [];
        matrix[topRow][i] = num++;
      }
      topRow++;
      
      // Traverse down
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i] = matrix[i] || [];
        matrix[i][rightCol] = num++;
      }
      rightCol--;
      
      // Traverse left
      for (let i = rightCol; i >= leftCol; i--) {
        matrix[bottomRow][i] = num++;
      }
      bottomRow--;
      
      // Traverse up
      for (let i = bottomRow; i >= topRow; i--) {
        matrix[i][leftCol] = num++;
      }
      leftCol++;
    }
    
    return matrix;
  }
  
  // Example usage
  const spiralNumbers = generateSpiralNumbers(5);
  console.log(spiralNumbers);
  