// function reverseInteger(num) {
//     const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
//     return num < 0 ? reversed * -1 : reversed;
//   }
  
//   console.log(reverseInteger(500)); // Output: 5
//   console.log(reverseInteger(-56)); // Output: -65
//   console.log(reverseInteger(-90)); // Output: -9
//   console.log(reverseInteger(91));  // Output: 19
  

  function reverseNumbers(num){
    var reversed = num.reverse()
    return reversed
  }

  console.log(reverseNumbers(500)); 