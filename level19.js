const arr = [3, 5, 6, 1];
let sum = 0;
arr.forEach((item) => {
  sum = sum + item;
});
console.log(sum);

// calculate sum of odd number

let addOddNum = 0;
arr.forEach((item) => {
  if (item % 2 != 0) {
    addOddNum = addOddNum + item;
  }
});

console.log(addOddNum);
