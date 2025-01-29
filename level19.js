// const arr = [3,5,6,1]
// let sum = 0;
// arr.forEach((item)=>{
//     if (item % 2 !== 0){
//         sum= sum + item;
//     })
    
// const arr = [3,5,6,1, 'ram' ,false]

// let sum = 0
    // Method 1
// const output = arr.map((item)=>{
//     if (item > 0){
//         sum = sum + item;
//     }   
// });

    // Method 2
// // const output = arr.forEach((item)=>{
// //     sum = sum + (parseInt(item) || 0)
// // })


//q1. calulate the sum of Numbers
// console.log(sum);

//q2. filter out non integers : expected output : [3,5,6,1]
// const filterr = arr.filter((item) => {
    // if (typeof item == 'number'){
        // or
//     if (Number.isInteger(item)){

//         return item;
//     }
// })
// console.log(filterr);


//q3. in the filtered result, multiply each number by 5 using .map
// const mapped = filterr.map((item)=>{
//     return item * 5;
// })

// const multi = filterr.map((item) => {
//     return item * 5;
// })
// console.log(multi);


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


const arr = [3, 7, 10, 15, 'apple', false, null, 12, 5, 'banana', undefined];

// Q1: Calculate the sum of all integers in the array that are divisible by 3.
// Expected output: 30

// let sum = 0;
// const num = arr.filter((item) => {
//     if (Number.isInteger(item) && item % 3 === 0) {
//        sum = sum + item;
//     }
// })
// console.log(sum);



// Q2: Create a new array containing only the valid integers greater than 5, sorted in ascending order.
// Expected output: [7, 10, 12, 15]

const num = arr.filter((item) => {
        if (Number.isInteger(item) && item > 5) {
           return item;
        }
    })
let sortedArray = num.sort((a, b) => {return a-b});
// console.log(sortedArray);



// Q3: From the sorted array, create an array of objects where each object has the number and its square.
// Expected output: [{ number: 7, square: 49 }, { number: 10, square: 100 }, { number: 12, square: 144 }, { number: 15, square: 225 }]

let newArr = [];
sortedArray.forEach((item) => {
    newArr.push({number: item, square: item**2});
})
console.log(newArr);