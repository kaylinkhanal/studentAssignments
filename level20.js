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
// Filter the array where age is greater than 35
const result = arr.filter(item => item.age > 35);
console.log(result);
=======
// hint
const output = arr.filter((item)=>{
return item.age > 35
})
>>>>>>> ff633266108519434d91d205ad3b71e48606fa67










// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0
arr.forEach((item)=>{
    ageSum = ageSum  + item.age
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
const result1 = arr.map(item => ({
    name: item.name + ' thapa',
    age: item.age
}));

console.log(result1);
