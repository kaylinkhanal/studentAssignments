let pocketMoney= 200
function buyChocolate(price, chocolate, qty){
    const remaining = pocketMoney - (price * qty)
    return `You have ${remaining} Remaining`
}

// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//Q2.
console.log(buyChocolate(11, 'kitkat', 3)) //arguments
console.log(buyChocolate(22, 'dairymilk', 4))
//expected output is
//you have 170 Rs Remaining
//You have 90 Rs remaining
