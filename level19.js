
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

const arr=[3,5,6,1,'ram',false]
let sum =0;
const output=arr.filter((item)=>{
    sum=sum+item;
})
console.log(sum);

//Q2