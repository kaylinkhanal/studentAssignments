const arr = [3, 5, 6, 2, 3];

//Q1. find length of arr
console.log(arr.length);

//Q2.remove first two indexes // expected output: [6,2,3]
const arr1 = [];

for (let i = 2; i < arr.length; i++) {
  arr1.push(arr[i]);
}
console.log(arr1);

const details = ["ram", { fullMarks: 150 }, { scores: [45, 23, 25] }];
//Q3. Find the percentage scored
console.log(details[2].scores);

totalscored = 0;
for (i = 0; i < details[2].scores.length; i++) {
  totalscored += details[2].scores[i];
}
console.log((totalscored / details[1].fullMarks) * 100, "%");
