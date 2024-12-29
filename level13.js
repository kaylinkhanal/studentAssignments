const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(' ').reverse())
//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
const A = name.split(' ');
const output1 = {[A[0]]: A[1]}
console.log(output1)

//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },

console.log({
    username: firstName[0].toUpperCase() + firstName.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1)
})
