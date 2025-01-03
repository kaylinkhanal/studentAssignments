const arr = [{
    name: 'ram',
    age:30
},{
    name: 'gopal',
    age: 40
}
]

//Q1 if age is greater than 35 return the item
////expected output:[{
//     name: 'gopal',
//     age: 40
// }
// ]
const item = arr.filter((item)=>{
    return item.age > 35
})

console.log(item)
// hint
//const output = arr.loop((item)=>{
// item ko age > 40 
//})

//console.log(output)


