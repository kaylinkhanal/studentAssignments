const name = 'ram thapa'






//Q1. Expected output:

// ['thapa','ram']

const reversedArray = name.split(' ').reverse();
console.log(reversedArray);





//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
const namee = name.split(' ');
const lower = { [namee[0]]: namee[1] };
console.log(lower);



//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
const [first,last] = name.split(' ');
const username = `${first.charAt(0).toUpperCase()}${first.slice(1)} ${last.charAt(0).toUpperCase()}${last.slice(1)}`;
console.log({username});