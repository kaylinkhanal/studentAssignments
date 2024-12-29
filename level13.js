const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(' ').reverse())
//Q2. Expected output
//  {
// 'ram': 'thapa'
// }



// const newname=name.split(' ')
// const obj={
//     [newname[0]]:newname[1],
// }
// console.log(obj)



//or
const Firstname=name.split(" ")[0]
const Lastname=name.split(" ")[1]
console.log({
    [Firstname]:Lastname
})


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },

console.log({
    username: firstName[0].toUpperCase() + firstName.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1)
})