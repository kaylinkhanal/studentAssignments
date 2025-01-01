
const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54

//combining all arrays
let all_scores = [results['2023'], results['2024'], results['2025']].flat()
let max = Math.max(...all_scores)
console.log(max)


//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
delete(results['2025'])
console.log(results)


//Q3 add all scores in a array
// [23,12,32,42,54,43]
let remaining_scores = [results['2023'], results['2024']].flat()
console.log(remaining_scores)
