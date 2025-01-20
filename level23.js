// // // PURE VS IMPURE FUNCTION IN JAVASCRIPT



// // // PURE:
// // // 1. Same output for same input 
// // // 2. this function depends on input parameters
// // // 3. Only uses its own scopes
// // // 4. Testing/Debugging is easier
// // // should have return


// // // IMPURE:
// // // 1. side efffect, modifies state: modifies variaibles in other/global scope
// // // 2. Depends on external factors/resources
// // // // loop over an array and save each item to database

// // function functionincrement(count) {
// //   count += 1; 
// //     console.log(count)
// // }

// // functionincrement(0)

// // // MAP --> array 
// // //FILTER --> array 

// // //REDUCE
// // 1. can return a single value, [], {}
// // 2. combine, transform as well as aggregate
// // 3. accumulator ---> a storable value in  each iteration
// // 4. 


// const cart = [
//     {id: 3, item: 'hawkins cooker', quantity: 3, price: 1000},
//     {id: 4, item: 'baltra cooker', quantity: 2, price: 4000},
// ]


// //expected output: 11000
//  const output  =cart.reduce((previousitem,currentitem)=>{
//     return previousitem + (currentitem.quantity*currentitem.price);
   
// },0)


// console.log(output)


const obj = {
    math: 3,
    science:5,
    comp: 4
  }
  
  //O O
  
  
  
  //Calculate the sum of all score
  let sum = 0
  for (let item in obj){
sum+=obj[item]
  }
    console.log(sum)
  
  const arr =[{ram:40},{gopal:50},{hari:60}]
  
  // using for of/for in output the highest marks scorer
  //expected ouput:
  //hari
  let highestscore=0
  let highestscorer=''
  for (let item of arr){
    console.log(Object.entries(item))
    const {name,marks}=Object.entries(item)
    if (marks>highestscore){
        highestscore=marks
        highestscorer=name
    }
  }
 console.log(highestscore)
