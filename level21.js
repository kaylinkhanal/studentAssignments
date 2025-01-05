const scores = [
  ["math", 99],
  ["science", 93],
  ["computer", 95],
];

//Q1. calculate the percentage scored

let total = 0;
scores.forEach((item) => {
  total += item[1];
  total = (total / 300) * 100;
  return total;
});

console.log(total);

console.log(total/3)

// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93

const lowestNumber = scores.map((item) => {
  return item[1];
});

const result = Math.min(...lowestNumber);
console.log(result);
