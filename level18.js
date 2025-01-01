let pocketmoney= 200

// function buyChocolate(price, chocolate){
//     const remainingAmount = pocketMoney - price
//     return 'If you buy cholocate' + chocolate + 'you will have '+ remainingAmount
// }

// console.log(buyChocolate(10, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

//Q2. 
// console.log(buyChocolate(10, 'kitkat', 3)) //arguments
// console.log(buyChocolate(20, 'dairymilk',4))
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining

function buyChocolate(price,chocolate,quantity){
      const remaining=pocketmoney-(price*quantity);
    return `If you buy cholocate ${chocolate} you will have  ${remaining}`
    }
console.log(buyChocolate(10, 'kitkat', 3)) //arguments
console.log(buyChocolate(20, 'dairymilk',4))








// Q3. convert the following syntax to ES6 arrow function

// function callMe(){
//     return 'hi'
// }

const callMe=()=>{
    return'hi'
}
