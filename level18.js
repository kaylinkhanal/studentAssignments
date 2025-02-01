let pocketMoney= 200

// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

function buyChocolate(price, chocolate){
    const quantity = Math.floor(pocketMoney / price)
    if(pocketMoney % price === 0){
        return 'You can buy ${quantity} ${chocolate} with your pocket money'
    } else {
        return 'You can buy ${quantity} ${chocolate} with your pocket money. You will have ${pocketMoney % price} remaining'
    }
}
function buyChocolate(price, chocolate, count){
    pocketMoney = pocketMoney - (price * count)
    return 'You have ${pocketMoney} Rs. remaining'
}
console.log(buyChocolate(11, 'kitkat'))
console.log(buyChocolate(20, 'dairymilk'))


//Q2. if you add money to remaining amount after buying chocolate, how many chocolates you can buy?
function buyChocolate(price, chocolate, item){
    const quantity = Math.floor(pocketMoney / price)
    const remainingAmount = pocketMoney % price
    if(remainingAmount ===0){
        return 'You can buy ${quantity} ${chocolate} with your pocket money'
    } else{
        const additionalAmountNeeded = price - remainingAmount
        return 'You can buy ${quantity} ${chocolate} with your pocket money. You will have ${pocketMoney % price} remaining. You can add ${additionalAmountNeeded} amount to buy ${quantity + 1} ${chocolate'
    }
}
// You have 170 Rs remaining
// You have 90 Rs remaining









// Q3. convert the following syntax to ES6 arrow function

const callMe =()=>{
    return 'hi'
}



