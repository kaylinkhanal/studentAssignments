let pocketMoney= 200
function buyChocolate(price, chocolate, count){
    pocketMoney = pocketMoney - (price * count)
    return `You have  ${pocketMoney} Rs. remaining`
}
// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(22, 'dairymilk'))

//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//Q2. 
console.log(buyChocolate(10, 'kitkat', 3)) //arguments
console.log(buyChocolate(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining









// Q3. convert the following syntax to ES6 arrow function

const callMe =()=>{
    return 'hi'
}



