let pocketMoney= 200

function buyChocolate(price, chocolate){
    const buyCount = Math.floor(pocketMoney/price)
    return 'If you buy cholocate' + chocolate + 'you will have '+ buyCount
}

console.log(buyChocolate(11, 'kitkat')) //arguments
console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney


//Q2. 
console.log(Chocolate(10, 'kitkat', 3)) //arguments
console.log(Chocolate(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining

function chocolate(price, chocolate, quantity){
    const pocketMoney = pocketMoney - (price*quantity)
    return 'You have'  ${pocketMoney} 'Rs remaining'
}
console.log(Chocolate(10, 'kitkat', 3)) //arguments
console.log(Chocolate(20, 'dairymilk',4))