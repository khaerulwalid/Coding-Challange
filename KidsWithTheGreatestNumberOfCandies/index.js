/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let kidsWithCandies = function(candies, extraCandies) {
    let output = []
    for(let i = 0; i < candies.length; i++) {
        let result = false;
        for(let j=0; j < candies.length; j++) {
            if(candies[i]+extraCandies >= candies[j]) {
                result = true
            } else {
                result = false
                break
            }
        }

        output[i] = result
    }

    return output;
};


console.log(kidsWithCandies([2,3,5,1,3], 3)); // must result [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); // must result [true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12], 10)); // must result [true,false,true]
