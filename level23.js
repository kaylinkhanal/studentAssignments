

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
const output = cart.reduce((sum, nextItem) => {
    return sum + nextItem.quantity * nextItem.price
},0)


console.log(output)

//_______________________________________//

const obj = {
    math: 3,
    science:5,
    comp: 4
  }

  //Calculate the sum of all score
  //O O
  let totalSum = 0;
  for (let item in obj){
    totalSum  += obj[item];   
  }
  console.log(totalSum)
  
  
  

const arr =[{ram:40},{gopal:50},{hari:60}]

// using for of/for in output the highest marks scorer
//expected ouput:
//hari

