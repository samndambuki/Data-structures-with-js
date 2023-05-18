//takes 2 parameters
//arr- input of the array 
//subArraySize - desired size of output array
function outputArray(arr, subArraySize) {
    //create an empty array output
    let output = []; 
    //for loop  loops through input array in increments of sdesired size of the array
    for (let i = 0; i < arr.length; i=i+subArraySize) {
        //slice - extracts a portion of the input array from indexize i to i+desired size
        //add results of subarra to output
      output.push(arr.slice(i, i + subArraySize));
    }
    return output;
  }

  console.log(outputArray([1, 2, 3, 3, 4, 5, 6, 7], 3));
  
  console.log(outputArray([1, 2, 3, 5, 6, 7], 1));

  console.log(outputArray([], 2))

  