const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}
//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54

const { 2023: scores2023, 2024: scores2024, 2025: scores2025 } = results;

const output = Math.max(...scores2023, ...scores2024, ...scores2025);
console.log(output)

//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }

// not delete but removing 

console.log({scores2023, scores2024})


// one way delete but no going backward 
// delete results[2025]
// console.log(results)

//Q3 add all scores in a array
// [23,12,32,42,54,43,0,0,0]
console.log([...score2023, ...score2024,...score2025])

const output3 = [...scores2023,...scores2024]
console.log(output3)