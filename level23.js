
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


//Q
const cart = [
    {id:3, items:'hawkins cooker', quantity:3, price: 1000},
    {id:4, items:'baltra cooker', quantity:2, price: 4000},
]

//expected output is 11000

const output = cart.reduce((accumulator, currentItem, nextIndex) => {
    return accumulator + (cart[nextIndex].quantity * cart[nextIndex].price)
    
}, 0)

console.log(output)