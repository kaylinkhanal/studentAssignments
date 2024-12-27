const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split())

console.log(name.split(' ').reverse())


//Q2. Expected output
//  {
// 'ram': 'thapa'
// }

const newname=name.split(' ')
const obj={
    [newname[0]]:newname[1],
}
console.log(obj)

//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
const newobject={
    username:name,
}
console.log(newobject)