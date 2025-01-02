const arr = [3,5,6,1, 'ram' ,false]

// let sum = 0
// const output = arr.forEach((item)=>{
//     sum = sum + (parseInt(item) || 0)
// })
// console.log(sum)

//q1. calulate the sum of Numbers
let sum = 0
arr.forEach((item) => {
    // sum = sum + (parseInt(item) || 0)
    // OR
    if (Number.isInteger(item)) sum += item
})
console.log(sum)

//q2. filter out non integers : expected output : [3,5,6,1]
const integers = arr.filter((item) => {
    return parseInt(item)
})
console.log(integers)
 
//q3. in the filtered result, multiply each number by 5 using .map
const mul5 = integers.map((item) => {
    return item * 5
})
console.log(mul5)
// ALT: using function chaining
const ans = arr.filter((item) => {
    return parseInt(item)
}).map((item) => {
    return item * 5
})
console.log(ans)


// MAP                   vs                   FOREACH
// -> returns new array                    -> doesn't return new array, but can modify existing array
// ->                                      -> faster
// -> chain new functions                  -> not chainable
//-> usecase: modify old array             ->usecase: just calcualte sth
//-> returned array length is always same

//FILTER
// -> returns new array
// -> can remove items from array
// -> 


