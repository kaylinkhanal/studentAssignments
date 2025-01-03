// const arr = [3,5,6,1, 'ram' ,false]

<<<<<<< HEAD
// let sum = 0
// const output = arr.map((item)=>{
//     //sum = sum + item
// })
// console.log(sum)

//q1. calculate the sum of Numbers

const numbers = ([3,5,6,1,'ram',false])
let sum = 0;
if(typeof == )
const output = numbers.forEach((items)=>{
sum = sum + items;
=======
let sum = 0
const output = arr.forEach((item)=>{
    sum = sum + (parseInt(item) || 0)
>>>>>>> 21577654e34a7344ff870a450fdafd1a42136b1a
})

//q2. filter out non integers : expected output : [3,5,6,1]
<<<<<<< HEAD
const numbers = [3,5,6,1,'ram',false]
const nonIntegers = numbers.filter((numbers)=>{
numbers
})
//q3. in the filtered result, multiply each number by 5 using .map
const numbers = [3,5,6,1,'ram',false]
const nonIntegers = numbers.filter((numbers)=>{

}).map((multiplyItems)=>{
multiplyItems*5;    
})
console.log(nonIntegers);
=======
const filtered = arr.filter((item)=>{
   return parseInt(item)
})
console.log(filtered)
//q3. in the filtered result, multiply each number by 5 using .map
const mapped = filtered.map((item)=>{
    return item * 5
})

console.log(mapped)
>>>>>>> 21577654e34a7344ff870a450fdafd1a42136b1a


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


