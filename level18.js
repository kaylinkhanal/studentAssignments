let pocketMoney= 200

//function buyChocolate(price, chocolate){
   // const remainingAmount = pocketMoney - price
    //return 'If you buy cholocate' + chocolate + 'you will have '+ remainingAmount
//}

//console.log(buyChocolate(10, 'kitkat')) //arguments
//console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
function buyChocolate(price, chocolate) {
    const noOfChocolate = Math.floor (pocketMoney / price)
    return 'You can buy ${noOfChocolate} ${chocolate} with your pocketmoney'

}

console.log(buyChocolate(11, 'kitkat')) 
console.log(buyChocolate(20, 'dairymilk'))
// You can buy 10 dairymilk with your pocketmoney