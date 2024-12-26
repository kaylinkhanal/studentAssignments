const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
n = name.split(' ').reverse()
console.log(n);


//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
let [FN, LN] = name.split(' ');
let answer = {[FN]: LN};
console.log(answer);


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
console.log(answer(0).touppercase())
