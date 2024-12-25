const name = "ram thapa";

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(" ").reverse());

//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const [ram, thapa] = name.split(" ");
const output = { [ram]: thapa };
console.log(output);

console.log("typeof ram :", typeof ram);
//Q3. expected output:
// {
// username: 'Ram Thapa'
// },

// first changed key name
const updatedKeyName = { username: name };

// changed first index from lower case to upper case

updatedKeyName.username =
  updatedKeyName.username.charAt(0).toUpperCase() +
  updatedKeyName.username.slice(1);

console.log(updatedKeyName);
