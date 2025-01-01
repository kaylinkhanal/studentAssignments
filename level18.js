// let pocketMoney= 200
// function buyChocolate(price, chocolate){
//     const buyCount = Math.floor(pocketMoney / price)
//     return `You can buy  ${buyCount}  ${chocolate}  with your pocket money`
// }
// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining
//Q2. 

let pocketMoney= 200
function buyChocolate(price, chocolate, count){
    const priceChoco = count* price
    const remaining = pocketMoney - priceChoco
    if(remaining < 0){
        return `You have don't have enough pocket money` 
    }
    return `You have ${remaining} remaining`
}
console.log(buyChocolate(10, 'kitkat', 3)) //arguments
console.log(buyChocolate(20, 'dairymilk',12))