const arr = [3, 5, 6, 1];

//   return item % 2 !== 0;

// console.log(oddNumber);
// sum = oddNumber.reduce((a, b) => a + b, 0);

// calculate sum of odd number
// console.log(sum);

const out = arr
  .map((item) => item + 1)
  .map((a) => a + 2)
  .filter((b) => b % 2 == 0)
  .map((a) => a + 5);
console.log(out);
