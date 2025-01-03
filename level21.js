const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let totalMarks = 0
let percentages = 0
scores.forEach((item)=>{
    totalMarks = totalMarks + item[1]
    })
    percentages = totalMarks/300*100
    

console.log(percentages.toFixed(2))

//Q2 what is the lowest marks scored? expected ouptut: 93
const lowestMarks = Math.min(...scores.map(item => item[1]));//using spread operator la number lai xardai pass gareko math.min ma sidhai array pass garna mildaina

console.log(lowestMarks);




