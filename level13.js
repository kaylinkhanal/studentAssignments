const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']

console.log(name.split(' ').reverse());



//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

let arr = name.split(' ');
let obj = Object.fromEntries([arr]);
console.log(obj);



//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },


const object = {
    username: name
}
console.log(object)

