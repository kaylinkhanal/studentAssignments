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
// Filter the array where age is greater than 35
const result = arr.filter(item => item.age > 35);
console.log(result);



