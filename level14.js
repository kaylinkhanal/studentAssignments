const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)

//Q2.remove first two indexes // expected output: [6,2,3]
console.log(arr.slice(2))

const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//Q3. Find the percentage scored 
let percentage = details[2].scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / details[1].fullMarks * 100
console.log(percentage)
// alternative: using destructuring
const [name, {fullMarks}, {scores: [subjectA, subjectB, subjectC]}] = details
console.log((subjectA + subjectB + subjectC) / fullMarks * 100)