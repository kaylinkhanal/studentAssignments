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
    if(item.age > 35){
        return item
    }

// item ko age > 40 
})

console.log(output)









// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0
arr.map((item)=>{
    ageSum = ageSum + item.age

    // ageSum = ageSum  + item ko age
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
const surname = arr.map((item)=>{
    return {
        name: item.name + ' thapa',
        age: item.age
    }
}   
) 
console.log(surname)  

// //better way of doing it only changing the name
// const updatedArr = arr.map((item)=>{
//     return {
//         ...item,
//         name: item.name + ' thapa'//j cha item sabai dincha name ma chai change gardinxa
//     }
// }   
// )
// console.log(updatedArr)



