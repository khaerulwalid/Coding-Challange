// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxAscendingSum = function(nums) {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }

        if (max < sum) max = sum;
    }
    return max;
};

console.log(maxAscendingSum([10,20,30,5,10,50])); // must result 65
console.log(maxAscendingSum([10,20,30,40,50])); // must result 150
console.log(maxAscendingSum([12,17,15,13,10,11,12])); // must result 33
console.log(maxAscendingSum([100,10,1])); // must result 100
console.log(maxAscendingSum([3,2,6,9,8,8])); // must result 17
