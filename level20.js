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
// hint
const output = arr.filter((item)=>{
    return item.age>35
})

console.log(output)




// Q2// find total sum of ages of users
// output is 70
// hint
let sum_age = 0
arr.forEach((item) => {
    sum_age += item.age
})
console.log(sum_age)







//Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]
const name_changed = arr.map((item) => {
    item.name += ' thapa'
    return item
})
console.log(name_changed)




//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]

// const winner  = arr.loop((item)=>{
//     // return only if item.name[0] is r
//     }).loop((item)=>{
//     // add a key item.winner = true  and return item
//     })
    
//     console.log(winner)

const r_names_replaced = arr.filter((item) => {
    return item.name[0] == 'r'
}).map((item) => {
    item['winner'] = true
    return item
})
console.log(r_names_replaced)








