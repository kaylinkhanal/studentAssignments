
const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0],
    2026:[90,40,20]
}

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54
let allScores = Object.values(results).flat();
let highestScore = Math.max(...allScores);
console.log(highestScore);




//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
delete results[2025];
console.log(results);
// }


//Q3 add all scores in a array
// [23,12,32,42,54,43]
const combinedScores = Object.values(results).flat();
console.log(combinedScores);

// CLass Code
const