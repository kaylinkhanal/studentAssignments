const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']

const output1 = name.split(' ').reverse()

console.log(output1)

//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const [firstName, lastName] = name.split(' ')

const output2 = {
    [firstName] : lastName,
}
console.log(output2)

//Q3. expected output: 
// {
    // name: 'Ram Thapa'
// },

const firstNameCapitalize = firstName.toUpperCase().charAt(0) + firstName.slice(1)
const   lastNameCapitalize = lastName.charAt(0).toUpperCase() + lastName.slice(1)
const capitalizeFullName = `${firstNameCapitalize} ${lastNameCapitalize}`

const output3 = {
    username : capitalizeFullName
}

console.log(output3)