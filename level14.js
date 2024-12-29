const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)


//Q2.remove first two indexes // expected output: [6,2,3]
console.log(arr.slice(2))


const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//Q3. Find the percentage scored 

const sum = details[2].scores[0] + details[2].scores[1] + details[2].scores[2]
const percentage = sum / details[1].fullMarks * 100
console.log(percentage)
