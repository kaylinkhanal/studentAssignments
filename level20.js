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
const output = arr.filter(item => item.age > 35)

console.log(output)









// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0
arr.forEach((item)=>{
    // ageSum = ageSum  + item ko age
    ageSum = ageSum + item.age
    })

    console.log(ageSum)







//Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]
// hint
const outputs = arr.map(item => ({ name: `${item.name} thapa`, age: item.age }))
console.log(outputs)

//better way of doing it only changing the name
const outputss = arr.map(item => ({ ...item, name: `${item.name} thapa` }))








//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]


const winner  = arr.filter((item)=>{
return item.name.startsWith('r')
}).map((item)=>{
    return {...item, winner: true}
// add a key item.winner = true  and return item
})

console.log(winner)
