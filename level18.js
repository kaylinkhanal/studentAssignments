let pocketMoney= 200

//function buyChocolate(price, chocolate){
   // const remainingAmount = pocketMoney - price
    //return 'If you buy cholocate' + chocolate + 'you will have '+ remainingAmount
//}

//console.log(buyChocolate(10, 'kitkat')) //arguments
//console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// function buyChocolate(price, chocolate) {
//     const noOfChocolate = Math.floor (pocketMoney / price)
//     return 'You can buy ${noOfChocolate} ${chocolate} with your pocketmoney'

// }

// console.log(buyChocolate(11, 'kitkat')) 
// console.log(buyChocolate(20, 'dairymilk'))
// // You can buy 10 dairymilk with your pocketmoney
function buyChocolate(price, chocolate){
    const buyCount = Math.floor(pocketMoney / price)
    return `You can buy  ${buyCount}  ${chocolate}  with your pocket money`
}
// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//Q2. 
function buyChocolatewithitem(price, chocolate, quantity) {
    pocketMoney= pocketMoney-(price*quantity)
    return `you have ${pocketMoney} remaining`
}
console.log(buyChocolatewithitem(10, 'kitkat', 3)) //arguments
console.log(buyChocolatewithitem(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining

// You have 90 Rs remaining
