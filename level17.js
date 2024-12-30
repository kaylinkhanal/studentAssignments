
const results = {
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54

const {2023:year1, 2024:year2, 2025:year3} = results
console.log(Math.max(...year1,...year2,...year3))

//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
const res = {...results}
delete res['2025']
console.log(res)

//Q3 add all scores in a array
// [23,12,32,42,54,43]
console.log([...results['2023'],...results['2024']])
