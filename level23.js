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


// Q
// const cart = [
//     {id: 3, item: 'hawkins cooker', quantity: 3, price: 1000},
//     {id: 4, item: 'baltra cooker', quantity: 2, price: 4000},
// ]
//expected output: 11000

//  const output  =cart.reduce((sum, nextItem)=>{
//    sum = sum + (nextItem.quantity * nextItem.price);
//    return sum
// },0);
// console.log(output);


// let sum = 0
// cart.forEach((item)=>{
//     sum = sum + item.price
// })
// console.log(sum)


// 1. Calculate the total quantity of items in the cart
// const cart = [
//     {id: 1, item: 'notebook', quantity: 5, price: 50},
//     {id: 2, item: 'pen', quantity: 10, price: 10},
//     {id: 3, item: 'eraser', quantity: 3, price: 5},
// ];
// Expected output: 18

// const totalQuantity = cart.reduce((curVal, totalQty) => {
//     curVal = curVal + totalQty.quantity;
//     return curVal;
// } ,0);
// console.log(totalQuantity);

// for in loop for objects
let obj = {
    a : 2,
    b: 3
}
// for (const key in obj) {
//     console.log(obj[key])
// }
