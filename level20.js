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
return item.age>35?true:false;
})

console.log(output)









// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0
arr.forEach((item)=>{
    // ageSum = ageSum  + item ko age
    ageSum = ageSum + item.age; 
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


const num = arr.map((item)=>{
    // ageSum = ageSum  + item ko age
    return item.name + ' thapa' 
    })

    console.log(num)
