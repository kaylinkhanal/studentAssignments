const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']



//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const [firstName, lastName] = name.split(' ');
const result = {[firstName] : lastName };
console.log(result);

const firstName = name.split(' ')[0]
const lastName = name.split(' ')[1]
console.log({
   [firstName]: lastName
})
//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },