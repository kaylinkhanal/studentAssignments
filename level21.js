const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
let fullmarks=300
scores.forEach((item)=>{
    total+=item[1];
percentage = total/fullmarks*100

    // harek ko item[1] lai add to total
})
console.log(percentage.toFixed(2))

//Q2 what is the lowest marks scored? expected ouptut: 93
const output = scores.map((item)=>{
    return item[1]
})
const result = Math.min(...lowest)
console.log(result)
