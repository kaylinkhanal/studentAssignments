let pocketMoney= 200
function buyChocolate(price, chocolate){
    const buyCount = Math.floor(pocketMoney / price)
    return `You can buy  ${buyCount}  ${chocolate}  with your pocket money`
}

// console.log(buyChocolate(10, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'))


// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

function canBuyChocolate(price, chocolateName) {
    const getChocolateFromPocketMoney = pocketMoney / price
    const chocolateCount = parseInt(getChocolateFromPocketMoney)
    return `You can buy ${chocolateCount} ${chocolateName} with your pocket money`;
}

console.log(canBuyChocolate(11, "kitkat"));
console.log(canBuyChocolate(20, 'dairymilk'))


//Q2. 
 //arguments

//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining


function getChocolate(price, chocolateName, reqChocolateCount) {
    const requestChocolatePrice = price * reqChocolateCount
    const remainingPocketMoney = pocketMoney - requestChocolatePrice
    return (`you have rs.${remainingPocketMoney} remaining`)
}
console.log(getChocolate(10, "kitkat", 3));
console.log(getChocolate(20, "dairymilk", 4));


const callme = ()=>{
    return ('ram')
}

console.log(callme())