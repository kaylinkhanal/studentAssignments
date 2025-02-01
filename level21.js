const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
    total = total + item[1]
})

const percentage = (total/300) * 100

console.log(percentage)

// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93


const output2 = scores.map((item)=>{
    return item[1]
})

const result = Math.min(...output2)
console.log(result)