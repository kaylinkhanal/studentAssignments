const name = "ram thapa";

//Q1. Expected output:
// ['thapa','ram']

console.log(name.split(" ").reverse());

//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const StringToArray = name.split(" ");
console.log(`${StringToArray[0]}: ${StringToArray[1]}`);

//Q3. expected output:
// {
// username: 'Ram Thapa'
// },

let newObj = {
  username: name,
};

console.log(newObj);
