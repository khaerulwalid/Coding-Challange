/**
 * @param {number[]} nums
 * @return {number[]}
 */

// ! Cara satu

// var getConcatenation = function(nums) {
//     let output = []
//     let k = 0
//     for(let i = 0; i < 2; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             output[k] = nums[j]
//             k++
//         }
//     }

//     return output
// };


// ! Cara dua

var getConcatenation = function(nums) {
    let output = [...nums, ...nums]

    return output
};


console.log(getConcatenation([1,2,1])); // must result [1, 2, 1, 1, 2, 1]
console.log(getConcatenation([1,3,2,1])); // must result [1,3,2,1,1,3,2,1]