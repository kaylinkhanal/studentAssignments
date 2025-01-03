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

// const greater= arr.filter((item)=>
// { 
//     return(item.age > 35)
// })
// console.log(greater)




// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0


    arr.forEach((item)=>
    {
        ageSum = ageSum + item.age
    })
    
    
    
    console.log(ageSum)