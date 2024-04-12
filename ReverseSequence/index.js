// ! 1. Cara Satu

// const reverseSeq = n => {
//     let output = []
//     for(let i = n; i > 0; i--) {
//       output.push(i)
//     }
    
//     return output;
// };

// ! 2. Cara Dua
const reverseSeq = n => {
    return Array(n).fill(0).map((el, i) => n-i)
};

console.log(reverseSeq(5)); // must result [5, 4, 3, 2, 1]
console.log(reverseSeq(7)); // must result [7, 6, 5, 4, 3, 2, 1]
console.log(reverseSeq(3)); // must result [3, 2, 1]