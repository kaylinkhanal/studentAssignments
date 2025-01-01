
//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney
// let pocketMoney= 200

// function buyChocolate(count,Chocalate){
//     const item1 = Math.floor(pocketMoney/count);
//     return `you can buy${item1}  ${Chocalate} with your Pocketmoney`
// }

// console.log(buyChocolate(11, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'))

//Q2. 
//expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining

function buyChocolate(item, chocolate, count) {
    let pocketMoney = 200;
    console.log(`Inital pocketMoey:${pocketMoney}`)
    let remainingMoney = pocketMoney - (item * count);
    return `You have ${remainingMoney} Rs remaining`;
}

console.log(buyChocolate(10, 'kitkat', 3)); // 
console.log(buyChocolate(20, 'dairymilk', 4)); // 





// Q3. convert the following syntax to ES6 arrow function

const callMe =()=>{
    return 'hi'
}
console.log(callMe())



