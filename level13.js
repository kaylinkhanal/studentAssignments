const name = "ram thapa";

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(" ").reverse());

//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const user = name.split(" ");
const result = { [user[0]]: user[1] };
console.log(result);

//Q3. expected output:
// {
// username: 'Ram Thapa'
// },
