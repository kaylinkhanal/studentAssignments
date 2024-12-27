const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(' ').reverse())



//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
const [first,last] = name.split(' ')
console.log({[first]:last})



//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
const first1= first.charAt(0).toUpperCase()+first.slice(1)
const last1= last.charAt(0).toUpperCase()+last.slice(1)
console.log({username: first1 + ' ' + last1})