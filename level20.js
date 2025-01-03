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

const output = arr.filter((item)=>{
   if(item.age>35)
    return item;
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