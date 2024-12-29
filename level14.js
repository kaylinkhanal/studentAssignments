const arr = [3,5,6,2,3]

//Q1. find length of arr
let arrLength = arr.length;
console.log(arrLength);

//Q2.remove first two indexes // expected output: [6,2,3]
let output = arr.splice(2);
console.log(output);

// Q3=>
const details = [
    'ram', {fullMarks: 150}, {scores: [45,23,25]}
]
//--> Find the percentage scored

const [fullname, {fullMarks}, {scores}] = details;

let totalScore = 0;
for (let i=0; i<scores.length; i++) {
    totalScore += scores[i];
}
const percentage = (totalScore / fullMarks * 100);
console.log(percentage, '%');
