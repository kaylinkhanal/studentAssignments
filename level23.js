
// // PURE:
// // 1. Same output for same input 
// // 2. this function depends on input parameters
// // 3. Only uses its own scopes
// // 4. Testing/Debugging is easier
// // should have return

// let sum = 0;
//O O
// for (let item in obj){
//   sum = sum  + obj[item]
  //do code changes
// }
// console.log(sum)
//Calculate the sum of all score

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
// let obj = {
//     a : 2,
//     b: 3
// }
// for (const key in obj) {
//     console.log(obj[key])
// }


// Q
// const obj = {
//   math: 3,
//   science:5,
//   comp: 4
// }
//Calculate the sum of all score:
// let sum = 0;
// for(const key in obj) {
//     sum += obj[key]
// }
// console.log(sum);


// Q
// const arr =[{ram:40},{gopal:50},{hari:60}]
// Method 1
// let score = 0;
// let highestScorer = '';
// for (let item of arr) {
//     for(let highestScore in item) {
//         if (score < item[highestScore]) {
//             score = item[highestScore];
//             highestScorer = highestScore;
//         }
//     }
// }
// console.log(score);
// console.log(highestScorer);

// Method 2
// let score = 0;
// let highestScorer = '';
// for (let item of arr) {
//     let scores = Object.entries(item)[0]
//         if (score < scores[1]) {
//             score = scores[1];
//             highestScorer = scores[0];
//         }
// }
// console.log(score);
// console.log(highestScorer);

// const output = arr.reduce((highScorer, nextItem, nextId)=>{
//   const [name, scores] =  Object.entries(nextItem)[0]
//   if(scores> highScorer[0]){
//     highScorer[0]= scores
//     highScorer[1] = name
//   }
// return highScorer
// },[0,''])

// console.log(output)
// using for of/for in output the highest marks scorer
//expected ouput:
//hari


// CallStack, CallBack Queue and EventLoop Example
// console.log("Start");

// setTimeout(() => {
//   console.log("Timer done");
// }, 2000);

// console.log("End");



// CallStack, CallBack Queue and EventLoop Example
// function child() {
//     return 10;
// }
// function parent() {
//     return child() + 93;
// }
// parent();


// closure example
// What is closure?
// => closure is a function along with its lexical enviroment. example is given below:-
// function main() {
//     let a = 2;
    
    // function sub() {        // the lexical enviroment of sub function is the variable a and its parent function 
    //     console.log(a)
    // }
    // return sub; // we returned sub instead of sub() because sub onlu returns the defination of sub function while sub() immidiately returns the sub function
// }
// let inner = main() // now when we store main() in inner it holds the subfunction for later use because we didnot returned the function sub instead we returned the defination of the sub function
// if your wondering why we can call inner like a function even though inner is a variable its because inner holds the refrence[or we can say it holds sub()] of sub function so we can treat inner like a function
// inner();        // now when we call inner() it executes the sub function and logs the value a, another thing is that sub() can still access var a because var a is in its lexical enviroment and var a doesnot get destroyed eventhough the mainfunction is already executed



// Q -> Write a function that reverses the order of words in a given string without reversing the characters in the words
// function reversed(word) {
//     let reverse = word.split(" ").reverse().join(" ");
//     console.log(reverse);
// }
// reversed("Hello World! How are you?")


// Q. Check if a Number is an Armstrong Number
// Write a function that checks whether a number is an Armstrong number (e.g., 153, 9474).
// let num = 153;
// let last = num.toString().split('');
// const lastIndex = [last.length-1];
// let armstrong = '';
// for (const arm of last) {
//     armstrong += arm**lastIndex;
// }
// console.log(armstrong)

// Expected Output:
// isArmstrongNumber(153)
// true
// isArmstrongNumber(9474)
// true
// isArmstrongNumber(9475)
// false
