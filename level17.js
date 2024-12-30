
const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54
const allScores = Object.values(results)
console.log(Math.max(...allScores.flat()))


//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
const { 2025: _, ...rest } = results
console.log(rest)


//Q3 add all scores in a array
// [23,12,32,42,54,43]

const allScoresArray = Object.values(results).flat()
//using reduce method
const total = allScoresArray.reduce((acc,curr)=>acc+curr,0)
console.log(total)
//without reduce method
const total2 = allScoresArray[0]+allScoresArray[1]+allScoresArray[2]+allScoresArray[3]+allScoresArray[4]+allScoresArray[5]
console.log(total2)


