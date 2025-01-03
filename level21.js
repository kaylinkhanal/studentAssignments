const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
    total+=item[1]
    
})
console.log(total);


const percentage = (total/300)*100
console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93

