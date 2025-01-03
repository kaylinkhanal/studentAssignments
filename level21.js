const scores = [
   [ 'math',99],[ 'science',93], ['computer',95]
]

//Q1. calculate the percentage scored



let total = 0
scores.forEach((item)=>{
      total = total + item[1]

      
      
    // harek ko item[1] lai add to total
})
console.log(total)
const percentage = (total / 3)
console.log(percentage.toFixed(2))//toFixed le 2 decimal places ma round garxa


// const percentage = total divide by ......
//console.log(percentage)
//Q2 what is the lowest marks scored? expected ouptut: 93
let lowest = scores[0][1]         //lowest lai scores ko 0th index ko 1st index ko value assign gareko
scores.forEach((item)=>{           //scores ko item lai loop gareko

    if(item[1] < lowest){           //if item[1] is less than lowest
        lowest = item[1]       //item[1] lai lowest ma assign gareko
    }
})
console.log(lowest)


// alternate methid to find the lowest marks using math.min
const lowestt = Math.min(...scores.map((item)=>item[1])) //scores ko item lai map gareko ani item[1] lai math.min le find gareko
console.log(lowestt)

