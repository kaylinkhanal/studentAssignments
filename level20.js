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
<<<<<<< HEAD

const output = arr.filter((item)=>{
   if(item.age>35)
    return item;
=======
// hint
const output = arr.filter((item)=>{
return item.age > 35
>>>>>>> 8afe770b6e9960895fc4329761e3760077b0f50f
})

console.log(output)









// Q2// find total sum of ages of users
// output is 70

let agesum =0
arr.forEach((item)=>{
    agesum+=item.age
})
console.log(agesum)







//Q3.Expected output: [{
//     name: 'ram thapa',
//     age:30
// },{
//     name: 'gopal thapa',
//     age: 40
// }
// ]

<<<<<<< HEAD
const output1 = arr.filter((item)=>{
    if(typeof item!== Boolean)
        return item;
}) 
console.log(output1)
=======








//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]

const winner  = arr.loop((item)=>{
// return only if item.name[0] is r
}).loop((item)=>{
// add a key item.winner = true  and return item
})

console.log(winner)
>>>>>>> 8afe770b6e9960895fc4329761e3760077b0f50f
