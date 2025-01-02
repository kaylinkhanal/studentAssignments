const arr = [3,5,6,1, 'ram' ,false]

const number = arr.filter((item)=>{
    if(Number.isInteger(item)){
        return item
    }
  
})
let sum= 0
const sum1=arr.forEach((item)=>{
    sum=item
})

console.log(sum)



// calculate the sum  number 
// console.log(sum)
