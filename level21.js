const scores = [
  ["math", 99],
  ["science", 93],
  ["computer", 95],
];

//Q1. calculate the percentage scored

let total = 0;
scores.forEach((item) => {
  total = item[1] + total;
  return total;
  // harek ko item[1] lai add to total
});

console.log(total);

const percentage = (total / 300) * 100;

console.log("The total percentage obtained is", Math.floor(percentage));
//Q2 what is the lowest marks scored? expected ouptut: 93
const lowmarks = scores.forEach((item) => {
  item[1] <= item[1];
  return item[1];
});

const output2 = scores.map((item) => {
  return item[1];
});

const result = Math.min(...output2);
