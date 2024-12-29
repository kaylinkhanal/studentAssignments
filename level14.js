const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)

//Q2.remove first two indexes // expected output: [6,2,3]
const arr1 = [...arr]
arr1.shift()
arr1.shift()
console.log(arr1)

const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//Q3. Find the percentage scored 
let sum = 0
for(let i =0;i<details[2].scores.length;i++){
    sum +=details[2].scores[i]
}
console.log((sum/details[1].fullMarks)*100)
