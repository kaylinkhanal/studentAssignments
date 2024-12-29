const arr = [3,5,6,2,3]

//Q1. find length of arr
// let arrLength = arr.length;
// console.log(arrLength);

//Q2.remove first two indexes // expected output: [6,2,3]
let output = arr.splice(2, 3)
console.log(output)


const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//Q3. Find the percentage scored 
