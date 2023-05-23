// function mostCommon(value) {
//   const charCount = Array.from(value).reduce((count, char) => {
//     count[char] = (count[char] || 0) + 1;
//     return count;
//   }, {});

//   return Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a : b);
// }

// // Example usage:
// console.log(mostCommon("11189")); // Output: '1'
// console.log(mostCommon("jonathan")); // Output: 'n'

function mostCommon(value) {
    let charCount = {};
    for (let char of value) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let mostCommonChar = null;
    let maxCount = 0;
  
    for (let char in charCount) {
      if (charCount[char] > maxCount) {
        mostCommonChar = char;
        maxCount = charCount[char];
      }
    }
  
    return mostCommonChar;
  }
  
  console.log(mostCommon("11189")); 
  console.log(mostCommon("jonathan")); 
  console.log(mostCommon("Sisters"));
  
