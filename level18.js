// let pocketMoney= 200

// function buyChocolate(price, chocolate){
//     const buyCount = Math.floor(pocketMoney/price)
//     return 'If you buy cholocate' + chocolate + 'you will have '+ buyCount
// }

// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

function buyChocolate(price, chocolate){
    const buyCount = Math.floor(pocketMoney / price)
    return `You can buy  ${buyCount}  ${chocolate}  with your pocket money`
}
// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))


//Q2. 
console.log(buyChocolate(10, 'kitkat', 3)) //arguments
console.log(buyChocolate(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining