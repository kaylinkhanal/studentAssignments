let pocketMoney= 200

function buyChocolate(price, chocolate){
    const remainingAmount = pocketMoney - price
    return 'If you buy cholocate' + chocolate + 'you will have '+ remainingAmount
}

console.log(buyChocolate(10, 'kitkat')) //arguments
console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney