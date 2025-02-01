const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}
//Q1 find  the all time highest score hint: use Math.max
//expected output is 54
const allScorres = Object.values(results)
console.log(Math.max(...allScorres.flat()))

//destructuring
const {2023:score1, 2024:score2, 2025:score3} = results
console.log(Math.max(...score1, ...score2, ...score3))

// const { 2023: score2023, 2024:score2024,2025:score2025 }  = results
// console.log(Math.max(...score2023, ...score2024, ...score2025))

//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
const { 2025: _, ...rest } = results 
//naming 2025 as _ just a convention ton not get an error
console.log(rest)


//Q3 add all scores in a array
// [23,12,32,42,54,43,0,0,0]
console.log([...score2023, ...score2024,...score2025])
const allScoresArray = Object.values(results).flat()
//flat() is used to convert 2D array to 1D i.e. nested array to flatten array--> [1,2,[3,4]]=> [1,2,3,4]
const total = allScoresArray.reduce((acc,curr)=>acc+curr,0)
console.log(total)

//without reduce method
const total2 = allScoresArray[0]+allScoresArray[1]+allScoresArray[2]+allScoresArray[3]+allScoresArray[4]+allScoresArray[5]
console.log(total2)

//union of three arrays
console.log([...score1, ...score2, ...score3])

//using concat method
console.log(score1.concat(score2, score3))

