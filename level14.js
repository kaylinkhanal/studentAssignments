const arr = [3,5,6,2,3]

//Q1. find length of arr

const arrLength = arr.length;
console.log(arrLength);


//Q2.remove first two indexes // expected output: [6,2,3]

const removeIndexes = arr.splice(2);
console.log(removeIndexes);

// const details = [
//     'ram',{fullMarks: 150}, {scores: [45,23,25]}
// ]
// //Q3. Find the percentage scored 
// console.log(details[2])
