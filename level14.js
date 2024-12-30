// @ts-nocheck
const arr = [3, 5, 6, 2, 3];

//Q1. find length of arr
const lenghtOfArr = arr.length;
console.log(lenghtOfArr); // answer 5
//Q2.remove first two indexes // expected output: [6,2,3]
// console.log(arr.slice(2, 5));
const details = ["ram", { fullMarks: 150 }, { scores: [45, 23, 25] }];
//Q3. Find the percentage scored
const fullMark = details[1].fullMarks;
const totalScore = details[2].scores.reduce((a, b) => a + b, 0);
// console.log((totalScore / fullMark) * 100);
console.log(totalScore);
