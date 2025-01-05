const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let totalMarks = 0
let percentages = 0
scores.forEach((item)=>{
    totalMarks = totalMarks + item[1]
    })
    percentages = totalMarks/300*100
    

console.log(percentages.toFixed(2))

//Q2 what is the lowest marks scored? expected ouptut: 93
const lowestMarks = Math.min(...scores.map(item => item[1]));//using spread operator la number lai xardai pass gareko math.min ma sidhai array pass garna mildaina

console.log(lowestMarks);





const output2 = scores.map((item)=>{
    return item[1]
})

const result = Math.min(...output2)
// Q1: Find the subject with the highest marks.
// Expected Output: 'math'
const highestMarks = Math.max(...scores.map(item => item[1]));
console.log(highestMarks);

// Q2: Calculate the average marks scored in all subjects.
// Expected Output: 95.67
const averageMarks = totalMarks / scores.length;
console.log(averageMarks.toFixed(2));

// Q3: Sort the scores array in ascending order of marks.
// Expected Output: [ [ 'science', 93 ], [ 'computer', 95 ], [ 'math', 99 ] ]
const sortedScores = scores.sort((a, b) => a[1] - b[1]);
console.log(sortedScores);

// Q4: Generate an array of objects where each object contains the subject and its percentage contribution to the total marks.
// Expected Output: [ { subject: 'math', percentage: 33.0 }, { subject: 'science', percentage: 31.0 }, { subject: 'computer', percentage: 32.0 } ]
const percentageContributions = scores.map(item => ({
    subject: item[0],
    percentage: (item[1] / totalMarks * 100).toFixed(1)
}));
console.log(percentageContributions);

// Q5: Create a new array with subjects where marks are greater than or equal to 95.
// Expected Output: [ 'math', 'computer' ]
const highScoringSubjects = scores.filter(item => item[1] >= 95).map(item => item[0]);
console.log(highScoringSubjects);

// Q6: Find the difference between the highest and lowest marks.
// Expected Output: 6
const difference = highestMarks - lowestMarks;
console.log(difference);

// Q7: Check if all subjects scored above 90.
// Expected Output: true
const allAbove90 = scores.every(item => item[1] > 90);
console.log(allAbove90);


// Q8: Reverse the scores array while maintaining the structure.
// Expected Output: [ [ 'computer', 95 ], [ 'science', 93 ], [ 'math', 99 ] ]
const reversedScores = scores.slice().reverse();
console.log(reversedScores);

// Q9: Find the index of the subject with 95 marks.
// Expected Output: 2
const index95 = scores.findIndex(item => item[1] === 95);
console.log(index95);

// Q10: Create a new array where each subject's marks are increased by 5, but do not modify the original array.
// Expected Output: [ [ 'math', 104 ], [ 'science', 98 ], [ 'computer', 100 ] ]
const increasedScores = scores.map(item => [item[0], item[1] + 5]);
console.log(increasedScores);

