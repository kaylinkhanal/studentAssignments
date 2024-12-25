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
const userObject = {username:name}
console.log(userObject)