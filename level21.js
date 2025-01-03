const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored
let total = 0
scores.forEach((item)=>{
   total += item[1]
})
const percentage = ((total/300)*100).toFixed(2)
console.log(percentage)

//Q2 what is the lowest marks scored? expected ouptut: 93
const lowMark = []
scores.forEach((item)=>{
   lowMark.push(item[1])
})
const low = Math.min(...lowMark)
console.log(low)

