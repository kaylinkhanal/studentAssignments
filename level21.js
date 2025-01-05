const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
<<<<<<< HEAD
    // harek ko item[1] lai add to total
    total = total + item[1];
=======
    total = total + item[1]
>>>>>>> 1657f0bb4081084a5f467dd7c529685208d0b662
})

console.log(total/3)

// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93


const output2 = scores.map((item)=>{
    return item[1]
})

const result = Math.min(...output2)