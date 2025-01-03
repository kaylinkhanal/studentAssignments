const scores = [
  ["math", 99],
  ["science", 93],
  ["computer", 95],
];

//Q1. calculate the percentage scored

let total = 0;
scores.forEach((item) => {
  total += item[1];
});

const totalMarks = scores.length * 100;
console.log(
  "QN 1 :- percentage scored :",
  ((total / totalMarks) * 100).toFixed(2)
);
// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93

const lowestScore = scores.map((num) => num[1]);
console.log("QN 2 ", Math.min(...lowestScore));
