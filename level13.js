const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
<<<<<<< HEAD
console.log(name.split())


=======
console.log(name.split(' ').reverse())
>>>>>>> 477555a495eb105feeeb2b73124cfc315c6c958d
//Q2. Expected output
//  {
// 'ram': 'thapa'
const [fname, lname] = name.split(' ');
const result = { [fname]: lname }; // Use dynamic key to create the object

console.log(result);
// }

const firstName = name.split(' ')[0]
const lastName = name.split(' ')[1]
console.log({
   [firstName]: lastName
})
//Q3. expected output: 
// {
    // username: 'Ram Thapa'
<<<<<<< HEAD
    console.log({username:'Ram Thapa'})
// },
=======
// },

console.log({
    username: firstName[0].toUpperCase() + firstName.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1)
})
>>>>>>> 477555a495eb105feeeb2b73124cfc315c6c958d
