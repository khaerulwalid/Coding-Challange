// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


/* 
! 1. Cara Satu
*/
// function grow(x){
//     let output = x[0]
//     for(let i = 0; i < x.length; i++) {
//       if(i !== x.length - 1) {
//         output = output * x[i+1]
//       }
//     }
    
//     return output
// }

/* 
! 2. Cara Dua
*/

function grow(x){
    let output = x.reduce((acc, curr) => acc * curr)

    return output
}


console.log(grow([1, 2, 3]));  // must result 6
console.log(grow([4, 1, 1, 1, 4]));  // must result 16
console.log(grow([2, 2, 2, 2, 2, 2]));  // must result 64