const cart = [
    {id:3, items:'hawkins cooker', quantity:3, price: 1000},
    {id:4, items:'baltra cooker', quantity:2, price: 4000},
]

//expected output is 11000

const output = cart.reduce((accumulator, currentItem, nextIndex) => {
    return accumulator + (cart[nextIndex].quantity * cart[nextIndex].price)
    
}, 0)

console.log(output)