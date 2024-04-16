const arr = ["a", "b", "a", "c", "d", "c", "a", "a", "c", "b", "c"]

let count = {}

arr.forEach(item => {
    if(count[item]) {
        count[item] += 1
    } else {
        count[item] = 1
    }
})

console.log(count);