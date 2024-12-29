const arr = [3, 5, 6, 2, 3];

//Q1. find length of arr

console.log(arr.length);

//Q2.remove first two indexes // expected output: [6,2,3]

console.log(arr.splice(2));

const details = ["ram", { fullMarks: 150 }, { scores: [45, 23, 25] }];
//Q3. Find the percentage scored

const [
  fullName,
  { fullMarks },
  {
    scores: [subjectA, subjectB, subjectC],
  },
] = details;

const markPercentage = ((subjectA + subjectB + subjectC) / fullMarks) * 100;
console.log(markPercentage);
