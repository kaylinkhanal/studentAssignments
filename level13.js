const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
let n = name.split(' ')
console.log(n.reverse())


//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
const nameAr = name.split(' ')
const obj = {
    [nameAr[0]]: nameAr[1],
}
console.log(obj)

//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
<<<<<<< HEAD
const first = name.split(' ')[0]
const last = name.split(' ')[1]
// const userObject = {username:first.charAt(0).toUpperCase()+first.substring(1) + ' '+last.charAt(0).toUpperCase()+last.subString(1)}
console.log(userObject)
=======

console.log({
    username: firstName[0].toUpperCase() + firstName.substring(1) + ' ' + lastName[0].toUpperCase() + lastName.substring(1)
})
>>>>>>> 477555a495eb105feeeb2b73124cfc315c6c958d
