const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored

let total = 0
scores.forEach((item)=>{
    total = total + item[1]

    // harek ko item[1] lai add to total
   
})
const percent =(total /  300) * 100
 
console.log (percent)

console.log(total/3)

// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93

// let lowest = 100
// scores.forEach((item)=>{
//     if(item[1] < lowest){
//         lowest = item[1]
//     }
// })
// console.log(lowest) 

const onlyScore = scores.map((item)=>{
    return item[1]
})
console.log(Math.min(...onlyScore))
