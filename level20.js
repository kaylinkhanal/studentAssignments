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
})

console.log(output)









// Q2// find total sum of ages of users
// output is 70
// hint
let ageSum = 0
arr.forEach((item)=>{
    ageSum += item.age
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

const newArr = arr.map((item)=>{
     item.name += ' thapa'
     return item
})
console.log(newArr)








//Q4  return only names starting with r, and declare him the winner, by adding new key
// winner as true

//[{
//     name: 'ram',
//     winner: true
//     age:30
// }
// ]
const a1 = arr.filter((item)=>{
    if(item.name[0] === 'r'){
        item.winner = true
        return item
    }

})
console.log(a1)

// Question:

// Find all products with a price greater than 50 and categorize them by category.

// Hint: Use filter and reduce methods.

// Expected Output:

// JavaScript

// {
//   "Electronics": [{ name: 'Laptop', price: 1000, category: 'Electronics' }]
// }

const products = [
    { name: 'Shirt', price: 20, category: 'Clothing' },
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Mug', price: 5, category: 'Kitchen' },
  ];

const productsPrice = products.filter((item)=>{
    if(item.price > 50){
        return item
    }
})
console.log(productsPrice)



// Count the number of sentences that contain the word 'love'.

// Hint: Use filter and length property.

// Expected Output:

// JavaScript

// 1 
const sentences = [
    'This is a great day.',
    'The weather is terrible.',
    'I love coding!',
  ];
let countLove= 0
sentences.forEach((item)=>{
    if(item.includes('love')){
        countLove += 1
    }
})
console.log(countLove)



// Create a new array containing only the customer names and their ordered items (as a single string).

// Hint: Use map and join methods.

// Expected Output:

// JavaScript

// [
//   { customer: 'Alice', items: 'Shirt,Hat' },
//   { customer: 'Bob', items: 'Laptop' },
//   { customer: 'Charlie', items: 'Mug,Pen' }
// ]
const orders = [
    { id: 1, customer: 'Alice', items: ['Shirt', 'Hat'] },
    { id: 2, customer: 'Bob', items: ['Laptop'] },
    { id: 3, customer: 'Charlie', items: ['Mug', 'Pen'] },
  ];
const newar = []
orders.forEach((item)=>{
    newar.push({customer: item.customer, items:item.items.toString()})
})
console.log(newar)

// Sort the data array by the color property in descending order.

// Hint: Use sort method with a custom compare function.

// Expected Output:

// JavaScript

// [
//   { name: 'Orange', color: 'Orange' }, 
//   { name: 'Banana', color: 'Yellow' }, 
//   { name: 'Apple', color: 'Red' } 
// ]

const data = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' },
  ];
const newData = data.sort((a,b)=> a.color.localeCompare(b.color))
console.log(data)





// Check if there are any books in the library written by a specific author (e.g., 'Charles Dickens').

// Hint: Use some method.

// Expected Output:

// JavaScript

// false 
const library = [
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ];


const found = library.some((item)=> item.author === 'Some one')
console.log(found)