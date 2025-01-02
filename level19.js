// const arr = [3,5,6,1, 'ram' ,false]

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
})

//q2. filter out non integers : expected output : [3,5,6,1]
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


