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
////expected output:[{
//     name: 'gopal',
//     age: 40
// }
// ]
// hint
const output = arr.filter((item) => {
  if (item["age"] > 35) {
    return item;
  }
});

console.log(output);

// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0;
arr.forEach((item) => {
  ageSum = ageSum + item["age"];
});

console.log(ageSum);

//Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]

const result = arr.map((details) => {
  details["name"] = details["name"] + " " + "thapa";

  return details;
});

console.log(result);

//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]

const winner = arr
  .map((item) => {
    if (item["name"] === "r") {
      return item;
    }
  })
  .map((item) => {
    item["winner"] = true;
    return item;
    // add a key item.winner = true  and return item
  });

console.log(winner);
