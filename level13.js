const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log (name.split(' ').reverse());

//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const [firstName, lastName] = name.split(' ');
const result = {[firstName] : lastName };
console.log(result);


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// }

//const name = 'ram thapa';
const newobject={
    username:name,
}
console.log(newobject)
