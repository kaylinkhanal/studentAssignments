//Q1.
// Order Summary: Transform an array of orders to a new array that includes 
// only the product name and total cost (quantity * price). Use map.

const orders = [
    { product: 'Shoes', quantity: 2, price: 1500 },
    { product: 'Bag', quantity: 1, price: 2000 },
];

const total_price = orders.map((item) => {
    // deep copy
    return {
        product: item.product,
        total_cost: item.quantity*item.price
    }
})

console.log(total_price)
console.log(orders)


//Q2
// Profile Display: Convert an array of user objects into an array of strings formatted as 
// "User: [name], Email: [email]". Use map.

const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
];

const profile = users.map((item) => {
    return `User: ${item.name}, Email: ${item.email}`
})

console.log(profile)


//Q3.
//Product Tax Calculation: Create a new array of products, where each product object includes 
// an additional field tax calculated as 10% of its price. Use map.

const products = [
    { name: 'Monitor', price: 5000 },
    { name: 'Keyboard', price: 1500 },
];

const tax = products.map((item) => {
    return {
        name: item.name,
        price: item.price,
        tax: 10/100*item.price
    }
})

console.log(tax)

