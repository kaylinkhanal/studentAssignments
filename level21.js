const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
    // harek ko item[1] lai add to total
    total = total + item[1];
})

// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93

