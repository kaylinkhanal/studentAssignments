const obj = {
  math: 3,
  science:5,
  comp: 4
}

//O O
for (let item in obj){
  console.log(item)
}

//Calculate the sum of all score

const arr =[{ram:40},{gopal:50},{hari:60}]

// let sum = 0
// cart.forEach((item)=>{
//     sum = sum + item.price
// })
// console.log(sum)

//expected output: 11000
 const output  =cart.reduce((sum, nextItem,nextId)=>{
   sum = sum + nextItem
   return sum
},0)


console.log(output)


