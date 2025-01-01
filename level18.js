let pocketMoney= 200

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney

// You can buy 10 dairymilk with your pocketmoney
function buyChocolate(price, chocolate){
    const quantity = Math.floor(pocketMoney / price)
    if(pocketMoney % price === 0){
        return `You can buy ${quantity} ${chocolate} with your pocket money`
    } else {
        return `You can buy ${quantity} ${chocolate} with your pocket money. You will have ${pocketMoney % price} remaining`
    }
}
console.log(buyChocolate(11, 'kitkat'))
console.log(buyChocolate(20, 'dairymilk'))


//q2. if you add money to remaining amount after buying chocolate, how many chocolates you can buy?
function buyChocolate(price, chocolate){
    const quantity = Math.floor(pocketMoney / price)
    const remainingAmount = pocketMoney % price
    if(remainingAmount === 0){
        return `You can buy ${quantity} ${chocolate} with your pocket money`
    } else {
        const additionalAmountNeeded = price - remainingAmount
        return `You can buy ${quantity} ${chocolate} with your pocket money. You will have ${remainingAmount} remaining. You can add ${additionalAmountNeeded} amount to buy ${quantity + 1} ${chocolate}`
    }
}







