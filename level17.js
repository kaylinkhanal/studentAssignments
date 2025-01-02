const results = {
  2023: [23, 12, 32],
  2024: [42, 54, 43],
  2025: [0, 0, 0],
};

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54

// Combine all scores into a single array using Object.values and flat
const allScores = ({} = Object.values(results).flat());

// Find the maximum value using Math.max
// @ts-ignore
const highestScore = Math.max(...allScores);
console.log(highestScore);
// console.log(highestScore); // Expected output: 54
//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }

//Q3 add all scores in a array
// [23,12,32,42,54,43]
//

const num = [1, 2, 3, 4, 5];
console.log(num.reduce((a, b) => a + b, 0));
