const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(' ').reverse())
//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
name_copy = {}
name_copy[x[1]] = x[0]
console.log(name_copy)

const firstName = name.split(' ')[0]
const lastName = name.split(' ')[1]
console.log({
   [firstName]: lastName
})
//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },

console.log({
    username: firstName[0].toUpperCase() + firstName.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1)
})
