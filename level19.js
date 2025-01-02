const arr = [3,5,6,1]
let sum = 0
arr.forEach((item)=>{
    sum= sum + item
})
console.log(sum)

// calculate sum of odd number

let sumOdd = 0
arr.forEach((item)=>{
    if(item%2!=0){
        sumOdd= sumOdd + item
    }
})