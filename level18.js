// let pocketMoney= 200;
// function buyChocolate(price, chocolate){
//     const quantity = Math.floor(pocketMoney / price);
//     const remainingAmount = pocketMoney - quantity * price;
//     const arkochoco =(price - remainingAmount);
//     // const a = arkochoco + remainingAmount;
    
//     return (`you can buy ${quantity} ${chocolate} with your pocketmoney and get Rs${remainingAmount} and if you add Rs${arkochoco} you can get another piece of chocolet`);
    
// }

// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'));



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney


//Q2. 
let pocketMoney= 200;
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining

function buyChocolate(price, chocolate, quantity){
    const remainingAmount = pocketMoney - (price * quantity);
    return (`you have ${remainingAmount} Rs remaining`);
}

console.log(buyChocolate(10, 'kitkat', 3)); //arguments
console.log(buyChocolate(20, 'dairymilk',4));








// Q3. convert the following syntax to ES6 arrow function

callMe = () =>{
    return 'hi'
}
console.log(callMe());
