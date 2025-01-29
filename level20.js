// const arr = [{
//     name: 'ram',
//     age:30
// },{
//     name: 'gopal',
//     age: 40
// }
// ]

//Q1 if age is greater than 35 return the item
//expected output:[{
//     name: 'gopal',
//     age: 40
// }
// ]
// const output = arr.filter((item)=>{
//     if(item.age >35) {
//         return item;
//     }
// })
// console.log(output);

// Q2// find total sum of ages of users
// output is 70
// let ageSum = 0;
// arr.map((item)=>{
//     ageSum = ageSum  + item.age;
//     return  ageSum;
// })
// console.log(ageSum);

//Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]

// const addSurnam = arr.map((item) => {
//     item.name = item.name + ' thapa';
//     return item;
// })
// console.log(addSurnam);

//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true
//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]

// const arr1 = arr.filter((item) => {
//     if (item.name[0] === 'r') {
//         item.winner = true;
//         return item;
//     }
// })
// console.log(arr1);

const arr = [
  { name: "shyam", age: 25, score: 85 },
  { name: "radha", age: 32, score: 95 },
  { name: "hari", age: 28, score: 72 },
  { name: "ravi", age: 41, score: 68 },
  { name: "gita", age: 35, score: 91 },
];

// Q1: Filter out the objects where the score is greater than
// or equal to 80 and age is less than 35.

// Expected output: [
//     { name: 'shyam', age: 25, score: 85 },
//     { name: 'radha', age: 32, score: 95 }
// ]

// const output = arr.filter((item) => {
//     if (item.score >= 80 && item.age < 35) {
//         return item;
//     }
// })
// console.log(output);

// Q2: Calculate the average score of all users who are older than 30.
// Expected output: 84.67 (round to two decimal places)

// let scoreSum = 0;
// const arrays = arr.filter((item) => {
//     if (item.age > 30) {
//         scoreSum = scoreSum + item.score;
//         return item;
//     }
// })
// arrLength = arrays.length;
// const avgScore = scoreSum / arrLength;
// console.log(avgScore.toFixed(2));

// Q3: Add a "passed" key to each object, where "passed" is true
// if the score is 75 or more, and false otherwise.
// Expected output: [
//     { name: 'shyam', age: 25, score: 85, passed: true },
//     { name: 'radha', age: 32, score: 95, passed: true },
//     { name: 'hari', age: 28, score: 72, passed: false },
//     { name: 'ravi', age: 41, score: 68, passed: false },
//     { name: 'gita', age: 35, score: 91, passed: true }
// ]

// const newArr = arr.map((item) => {
//     if (item.score >= 75) {
//         item.passed = true;
//     } else if (item.score <= 75) {
//         item.passed = false;
//     }
//     return item;
// })
// console.log(newArr);

// Q4: Return only the names of the users, but capitalize the first letter of each name.
// Expected output: ['Shyam', 'Radha', 'Hari', 'Ravi', 'Gita']

// let names = arr.map((item) => {
//     item = item.name[0].toUpperCase() + item.name.slice(1);
//     return item;
// })
// console.log(names);

// Q5: Sort the objects by score in descending order and then by age in ascending order (if scores are equal).
// Expected output: [
//     { name: 'radha', age: 32, score: 95 },
//     { name: 'gita', age: 35, score: 91 },
//     { name: 'shyam', age: 25, score: 85 },
//     { name: 'hari', age: 28, score: 72 },
//     { name: 'ravi', age: 41, score: 68 }
// ]

const sortedArray = arr.sort((a, b) => {
  if (b.score === a.score) {
    return a.age - b.age;
  }
  return b.score - a.score;
});
console.log(sortedArray);
