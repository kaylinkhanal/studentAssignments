const obj = {
  math: 3,
  science:5,
  comp: 4
}

let sum = 0
//O O
for (let item in obj){
  sum = sum  + obj[item]
  //do code changes
}
console.log(sum)
//Calculate the sum of all score

<<<<<<< HEAD
// // PURE:
// // 1. Same output for same input 
// // 2. this function depends on input parameters
// // 3. Only uses its own scopes
// // 4. Testing/Debugging is easier
// // should have return


// // IMPURE:
// // 1. side efffect, modifies state: modifies variaibles in other/global scope
// // 2. Depends on external factors/resources
// // // loop over an array and save each item to database

// function functionincrement(count) {
//   count += 1; 
//     console.log(count)
// }

// functionincrement(0)

// // MAP --> array 
// //FILTER --> array 

// //REDUCE
// 1. can return a single value, [], {}
// 2. combine, transform as well as aggregate
// 3. accumulator ---> a storable value in  each iteration
// 4. 


const cart = [
    {id: 3, item: 'hawkins cooker', quantity: 3, price: 1000},
    {id: 4, item: 'baltra cooker', quantity: 2, price: 4000},
]

// let sum = 0
// cart.forEach((item)=>{
//     sum = sum + item.price
// })
// console.log(sum)

//expected output: 11000
 const output  =cart.reduce((sum, nextItem,nextId)=>{
   sum = sum + nextItem * cart.quantity;
   return sum
},0)


console.log(output)

=======
const arr =[{ram:40},{gopal:50},{hari:60}]
>>>>>>> b87f262e6de2a5fdc3848a33237b105493802827

const output = arr.reduce((highScorer, nextItem, nextId)=>{
  const [name, scores] =  Object.entries(nextItem)[0]
  if(scores> highScorer[0]){
    highScorer[0]= scores
    highScorer[1] = name
  }
return highScorer
},[0,''])

console.log(output)
// using for of/for in output the highest marks scorer
//expected ouput:
//hari
