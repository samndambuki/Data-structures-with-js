// function reversedString(str){
//     let reversed = ''
//     for(let char of str){
//     reversed = char + reversed
//         debugger;
//     }
//     return reversed
// }

// console.log(reversedString("Sam"))

function reverseString(str){
    //split converts into an array
    //reduce - adding - takes 2 things
    //'' - starting point which is empty
    return str.split('').reduce((prev,cur)=>{
        debugger
        return cur+prev
    },'')
}
console.log(reverseString("Sam"))

module.exports={reverseString}