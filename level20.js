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
// item ko age > 40 
    return item.age > 35
})

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
const result = arr.map((item)=>{
    item.name += ' thapa'
    return item
})
console.log(result)

//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]

const winner  = arr.filter((item)=>{
<<<<<<< HEAD
    // return only if item.name[0] is r
    return item.name[0] === 'r'
    }).map((item)=>{
    // add a key item.winner = true  and return item
    item.winner = true
    return item
    })
    
    console.log(winner)
=======
    return item.name[0] === 'r'
}).map((item)=>{
    item.winner = true 
    return item
})

console.log(winner)
>>>>>>> 1657f0bb4081084a5f467dd7c529685208d0b662
