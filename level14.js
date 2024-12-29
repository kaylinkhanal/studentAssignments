const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)

//Q2.remove first two indexes // expected output: [6,2,3]

let brr=arr.slice(2)
console.log(brr)


const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//Q3. Find the percentage scored 
const fullMarks = details[1].fullMarks; 
const scores = details[2].scores;

const totalScored = scores.reduce((sum, score) => sum + score, 0);

const percentage = (totalScored / fullMarks) * 100;

console.log(`Percentage scored: ${percentage.toFixed(2)}%`);
