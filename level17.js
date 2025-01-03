const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}
//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54
const Highest = Math.max(...Object.values(results).flat()) //flat converts array of arrays to a single array
console.log(Highest)
    



//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
//rest operator
const {2025:remove,...rest} = results //naming 2025 as remove and rest as rest because number cannot be used as variable name
console.log(rest) //rest is the object that contains all the values except 2025




//Q3 add all scores in a array
// [23,12,32,42,54,43]

const scores = Object.values(results).flat()//flat le array ko array lai ekai array ma convert garxa
console.log(scores)


