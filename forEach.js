// forEach

//Q1.
// E-commerce Dashboard: You have an array of products, and you need to log a message for each product that says, 
// "Product [name] is currently in stock with [quantity] units available." Use forEach.

const products = [
    { id: 1, name: 'Laptop', quantity: 10 },
    { id: 2, name: 'Phone', quantity: 20 },
    { id: 3, name: 'Tablet', quantity: 5 },
];

products.forEach((item) => {
    if(item.quantity !== 0) console.log(`Product ${item.name} is currently in stock with ${item.quantity} units available.`)
    else console.log(`Sorry, ${item.name} not is stock.`)
})


//Q2.
// User Notifications: You have an array of users, and you need to send a welcome email to each user in the list.
// Use forEach to simulate this process by logging "Email sent to [user.email]".

const users = [
    { id: 1, email: 'user1@example.com' },
    { id: 2, email: 'user2@example.com' },
    { id: 3, email: 'user3@example.com' },
];

users.forEach((item) => {
    console.log(`Email sent to ${item.email}`)
})


//Q3.
//Order Status Update: Given an array of orders, mark all orders as "processed" 
// by adding a new property status: 'processed' to each order.

const orders = [
    { id: 101, product: 'Headphones', quantity: 1 },
    { id: 102, product: 'Mouse', quantity: 2 },
];

orders.forEach((item) => {
    item['processed'] = true
})

console.log(orders)


