const arr = [3, 5, 6, 2, 3];

//Q1. find length of arr
console.log(arr.length);

//Q2.remove first two indexes // expected output: [6,2,3]
console.log(arr.slice(2));
console.log(arr.splice(2));
// console.log(arr.substring(0,));

const details = ["ram", { fullMarks: 150 }, { scores: [45, 23, 25] }];
//Q3. Find the percentage scored
// console.log(details[2].values());

//Destructrucing.
const [
  name,
  { fullMarks },
  {
    scores: [marks1, marks2, marks3],
  },
] = details;

// console.log(marks1);
const add = marks1 + marks2 + marks3;

const percent = (add / fullMarks) * 100;

console.log(percent, "%");
