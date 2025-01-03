
// console.log(arr);


// calculate sum of odd number
// const arr = [3,5,6,1]
// let sum = 0
// arr.forEach((item)=>{
//     if(item%2===1){
//         sum= sum + item
//     }else{
        
//     }
    
// })
// console.log(sum)

// const arr=[3,5,6,1,'ram',false]
// let sum =0;
// const output=arr.map((item))=>{
//     sum=sum+item;
// }


//Q1 calculate the sum of numbers

// const arr=[3,5,6,1,'ram',false]
// let sum =0;
// const output=arr.filter((item)=>{
//     sum=sum+item;
// })
// console.log(sum);

// //Q2
// const arr = [3,5,6,1, 'ram' ,false]

// let sum = 0
// const output = arr.map((item)=>{
//     //sum = sum + item
// })
// console.log(sum)

//q1. calulate the sum of Numbers
const arr = [3, 5, 6, 1, 'ram', false];

let sum = 0;
arr.forEach((item) => {
  if (typeof item === 'number') {
    sum += item;
  }
});

console.log(sum); 

//q2. filter out non integers : expected output : [3,5,6,1]
const drr = [3, 5, 6, 1, 'ram', false];

const integers = drr.filter(item => Number.isInteger(item));

console.log(integers); 

//q3. in the filtered result, multiply each number by 5 using .map

const mapped=integers.map((item)=>{
    return item*5;
})
console.log(integers);

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


