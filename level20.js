const arr = [
  {
    name: "ram",
    age: 30,
  },
  {
    name: "gopal",
    age: 40,
  },
];

//Q1 if age is greater than 35 return the item

console.log(arr.filter((person) => person.age > 35));
////expected output:[{
//     name: 'gopal',
//     age: 40
// }
// ]
// hint
// const output = arr.loop((item)=>{
// // item ko age > 40
// })

// console.log(output)

// Q2// find total sum of ages of users

let totalAge = 0;

arr.forEach((person) => {
  totalAge = totalAge + person.age;
});

console.log(totalAge);
// output is 70
// hint
// let ageSum = 0;
// arr.loop((item) => {
//   // ageSum = ageSum  + item ko age
// });

// console.log(ageSum);

// Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]

// Q 3

const updatedArr = arr.map((person) => ({
  name: person.name + " thapa ",
  age: person.age,
}));

console.log(updatedArr);

//Q 4
const newArray = arr
  .filter((person) => person.name[0] === "r")
  .map((item) => ({
    name: item.name,
    winner: true,
    age: item.age,
  }));

console.log(newArray);
