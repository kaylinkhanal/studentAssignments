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

const output = arr.filter((item) => {
  if (item.age > 35) {
    console.log(item);
  }
});
////expected output:[{
//     name: 'gopal',
//     age: 40
// }
// ]
// hint
// const output = arr.loop((item) => {
//   // item ko age > 40
// });

console.log(output);
