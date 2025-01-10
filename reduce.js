// Eg.1
let arr = [1,2,3,4,5]

const factorial = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(factorial)


// Eg.2
let multi_dim = [[1,2], [2,3], [3,4]]

const single_dim = multi_dim.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);
console.log(single_dim)



// ChatGPT questions
//Q1.Cart Total Calculation: Calculate the total cost of all items in a shopping cart.

const cart = [
    { id: 1, product: 'Sofa', quantity: 2, price: 8000 },
    { id: 2, product: 'Chair', quantity: 4, price: 2000 },
];

const total_cost = cart.reduce((accumulator, currentValue, currentIndex) => {
    current_total = cart[currentIndex].price * cart[currentIndex].quantity
    return accumulator + current_total
}, 0)

console.log(total_cost)


// Q2.
// Total Users Count by Plan: Aggregate the count of users by their subscription plans (e.g., premium, basic).

const users = [
    { name: 'Sam', plan: 'premium' },
    { name: 'Alex', plan: 'basic' },
    { name: 'Chris', plan: 'premium' },
];

const user_count = users.reduce((accumulator, currentValue) => {
    if(currentValue.plan === 'premium') accumulator[0] += 1
    else if(currentValue.plan === 'basic') accumulator[1] += 1

    return accumulator
}, [0,0]) //initial value is array so that first index counts premium users and second index counts basic users

console.log(user_count)


// Q3.
// Highest Spending Customer: Find the customer who has spent the most by comparing the total cost of their orders.

const customers = [
    { name: 'Alice', orders: [ { quantity: 1, price: 5000 }, { quantity: 2, price: 3000 } ] },
    { name: 'Bob', orders: [ { quantity: 1, price: 7000 }, { quantity: 1, price: 2000 } ] },
    { name: 'Jon', orders: [ { quantity: 5, price: 5000 }, { quantity: 5, price: 5000 } ]}
];

const highest_spender = customers.reduce((accumulator, currentValue) => {
    // calculate the total spending of current user for comparison with other users
    const total_spending = currentValue.orders.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.price
    }, 0)

    // finding highest spender by comparing total spending with previous customer (accumulator)
    if(total_spending  > accumulator['total_spending']){
        // if total_spending (of current user) is greater than accumulator (of previous user)
        accumulator['total_spending'] = total_spending // get now highest spender amount
        accumulator['name'] = currentValue.name
    }

    return accumulator
}, 
{name: '', total_spending: 0} ) 
// initializing accumulator as array where first index stores total spending of highest spender and 
// second index stores the name

console.log(highest_spender)