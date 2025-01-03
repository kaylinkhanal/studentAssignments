const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored
let total = 0;
scores.forEach((item) => {
    total += item[1]; // Add each score to the total
});

// const percentage = total divide by ......
const percentage = Math.floor(total / scores.length);
console.log(`Percentage scored: ${percentage}%`);

// Q2. What is the lowest marks scored? Expected output: 93
const marks = scores.map(item => item[1]);
const lowestMarks = Math.min(...marks);
console.log(`Lowest marks scored: ${lowestMarks}`);



