//Q1.
//Out-of-Stock Items: Filter out products that are out of stock (quantity === 0).

const products = [
    { name: 'TV', quantity: 0 },
    { name: 'AC', quantity: 5 },
];

const in_stock_items = products.filter((item) => {
    // shallow copy
    return item.quantity !== 0  
})
// to perform deep copy as well, uncomment below code:
// .map((item) => {
//     return {name: item.name, quantity:item.quantity}
// })

console.log(in_stock_items)
console.log(products)


//Q2.
// Premium Users: From an array of users, extract only those users who have subscribed to a premium plan.

const users = [
    { id: 1, name: 'John', plan: 'basic' },
    { id: 2, name: 'Jane', plan: 'premium' },
];

const premiumMembers = users.filter((item) => {
    return item['plan'] === 'premium'
})

console.log(premiumMembers)


//Q3.Orders Over a Threshold: Filter orders where the total price (quantity * price) is greater than 5000.

const orders = [
    { product: 'Laptop', quantity: 1, price: 6000 },
    { product: 'Phone', quantity: 2, price: 2000 },
];

const priceThreshold = orders.filter((item) => {
    return item.quantity * item.price > 5000
})

console.log(priceThreshold)