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
function buyChocolate(price, chocolate, count){
    pocketMoney = pocketMoney - (price * count)
    return `You have  ${pocketMoney} Rs. remaining`
}
console.log(buyChocolate(11, 'kitkat'))
console.log(buyChocolate(20, 'dairymilk'))


//q2. if you add money to remaining amount after buying chocolate, how many chocolates you can buy?
function buyChocolate(price, chocolate, item){
    const quantity = Math.floor(pocketMoney / price)
    const remainingAmount = pocketMoney % price
    if(remainingAmount === 0){
        return `You can buy ${quantity} ${chocolate} with your pocket money`
    } else {
        const additionalAmountNeeded = price - remainingAmount
        return `You can buy ${quantity} ${chocolate} with your pocket money. You will have ${remainingAmount} remaining. You can add ${additionalAmountNeeded} amount to buy ${quantity + 1} ${chocolate}`
    }
}



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//Q2. 

//expected output is 


// You have 170 Rs remaining
const buyChocolates=(price, chocolate, item)=>{
    let pocketMoney=200;
   
    pocketMoney = pocketMoney-(price*item)
    return `you have ${pocketMoney} Rs remaining`

    
}
console.log(buyChocolates(10, 'kitkat', 3)) //arguments
console.log(buyChocolates(20, 'dairymilk', 4))


// You have 90 Rs remaining
// You have 90 Rs remaining









// Q3. convert the following syntax to ES6 arrow function

const fact = (n) => {
  if (n < 1) {
    return 1
  } 
  return n * fact(n - 1)
}



