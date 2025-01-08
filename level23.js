// // PURE VS IMPURE FUNCTION IN JAVASCRIPT



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
//  const output  =cart.reduce((sum, nextItem,nextId)=>{
//    sum = sum + nextItem
//    return sum
// },0)


// console.log(output)
// const cart = [
//   {id: 3, item: 'hawkins cooker', quantity: 3, price: 1000},
//   {id: 4, item: 'baltra cooker', quantity: 2, price: 4000},
// ];

const total = cart.reduce((sum, item) => {
  sum=sum + item.price * item.quantity
     return sum  }, 0);
console.log(total); 


