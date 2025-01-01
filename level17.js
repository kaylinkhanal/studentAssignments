const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}
//Q1 find  the all time highest score hint: use Math.max
<<<<<<< HEAD
//expected ouput is 54
const totalResults = Object.values(results).flat()
console.log(Math.max(...totalResults))



=======
//expected output is 54
const { 2023: score2023, 2024:score2024,2025:score2025 }  = results
console.log(Math.max(...score2023, ...score2024, ...score2025))
>>>>>>> 6df32027839b0df44ff930def5afffd7b1f8e92d
//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
<<<<<<< HEAD
delete results[2025]
console.log(results)

//Q3 add all scores in a array
// [23,12,32,42,54,43]
const newResults = Object.values(results).flat()
console.log(newResults)
=======
console.log({score2023,score2024})
//Q3 add all scores in a array
// [23,12,32,42,54,43,0,0,0]
console.log([...score2023, ...score2024,...score2025])

>>>>>>> 6df32027839b0df44ff930def5afffd7b1f8e92d
