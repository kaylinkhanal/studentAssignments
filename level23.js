const obj = {
  math: 3,
  science: 5,
  comp: 4,
};

//O O
let sum = 0;
for (let item in obj) {
  sum += obj[item];
}

console.log(sum);

//Calculate the sum of all score

const arr = [{ ram: 40 }, { gopal: 50 }, { hari: 60 }];

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
