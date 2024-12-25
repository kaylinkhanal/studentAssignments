const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']



//Q2. Expected output
//  {
// 'ram': 'thapa'
const [fname, lname] = name.split(' ');
const result = { [fname]: lname }; // Use dynamic key to create the object

console.log(result);
// }


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
    console.log({username:'Ram Thapa'})
// },