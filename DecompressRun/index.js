/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = []
    // for(let i = 0; i < nums.length; i += 2) {
    //     for(let j = 0; j < nums[i]; j++) {
    //         output.push(nums[i+1])
    //     }
    // }


    // simple solution
    for(let i = 1; i < nums.length; i += 2) {
        output.push(...new Array(nums[i-1]).fill(nums[i]))
    }

    return output
};

console.log(decompressRLElist([1,2,3,4])); // must result [2,4,4,4]
console.log(decompressRLElist([1,1,2,3])); // must result [1,3,3]