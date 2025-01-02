// calculate sum of odd number
const arr = [3,5,6,1]
let sum = 0
arr.forEach((item)=>{
    if(item%2==1)
    sum= sum + item
})
console.log(sum)
