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
