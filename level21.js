const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
   total += item[1];
    // harek ko item[1] lai add to total
})
console.log(total)

console.log(total/3)

// const percentage = total divide by ......
//console.log(percentage)
const percentage = total/scores.length;
console.log(percentage)

//Q2 what is the lowest marks scored? expected ouptut: 93

const result = scores.map((item) => {
    return item[1]
})
console.log(Math.min(...result))


