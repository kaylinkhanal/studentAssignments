const obj = {
  math: 3,
  science: 5,
  comp: 4,
};

let sum = 0
//O O
<<<<<<< HEAD
let sum = 0;
for (let item in obj) {
  sum += obj[item];
}

console.log(sum);

=======
for (let item in obj){
  sum = sum  + obj[item]
  //do code changes
}
console.log(sum)
>>>>>>> 4aca03cd82c641328a1ebc2c68ae1c020384a486
//Calculate the sum of all score

const arr = [{ ram: 40 }, { gopal: 50 }, { hari: 60 }];

<<<<<<< HEAD
for (const item of arr) {
  const [scores] = Object.values(item);
}

// let sum = 0
// cart.forEach((item)=>{
//     sum = sum + item.price
// })
// console.log(sum)

// for (const element of object) {
//   console.log(element);
// }

//expected output: 11000
// const output = cart.reduce((sum, nextItem, nextId) => {
//   sum = sum + nextItem;
//   return sum;
// }, 0);

// console.log(output);
=======
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
>>>>>>> 4aca03cd82c641328a1ebc2c68ae1c020384a486
