/**
 * @param {number} x
 * @return {boolean}
 */

// ! Cara Satu
// var isPalindrome = function(x) {
//     let xString = x.toString()
//     let xResult = ""
//     for(let i = xString.length; i > 0 ; i--) {
//         xResult += xString[i-1]
//     }

//     if(xString === xResult) {
//         return true
//     }

//     return false
// };


// ! Cara Dua
var isPalindrome = function(x) {
    const arr = String(x).split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    
    return true;
};

console.log(isPalindrome(121)); // must result true
console.log(isPalindrome(-121)); // must result false
console.log(isPalindrome(10)); // must result false