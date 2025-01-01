// let pocketMoney= 200

// function buyChocolate(price, chocolate){
//     const remainingAmount = pocketMoney - price
//     return 'If you buy cholocate' + chocolate + 'you will have '+ remainingAmount
// }

// console.log(buyChocolate(10, 'kitkat')) //arguments
// console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

// let pocketMoney = 200;
// function buyChocolate(price, chocolate){
//     const buyCount =Math.floor(pocketMoney / price);
//     return (`You can buy ${buyCount} ${chocolate} with your pocket money`)
// }


// console.log(buyChocolate(11, 'kitkact'));
// console.log(buyChocolate(22, 'dairymilk'))


// Q2 

// console.log(buyChocolate(10, 'kitkact' , 3));
// console.log(buyChocolate(20, 'dairymilk' , 4))

// expected output is 
// You have 170 Rs remaining
// You have 90 Rs remaining


let pocketMoney = 200;

function buyChocolate(price, chocolate, quantity) {
    const totalCost = price * quantity; // Calculate total cost
    const remainingAmount = pocketMoney - totalCost; // Calculate remaining money

    return `You have ${remainingAmount} Rs remaining`;
}

// Test cases
console.log(buyChocolate(10, 'kitkat', 3)); // 3 kitkats at 10 Rs each
console.log(buyChocolate(20, 'dairymilk', 4)); // 4 dairymilks at 20 Rs each

 // Q3 convert the folowing syntax to ES6 arrow function 

 const callMe=() => {
    return 'hi'
 }
 
 callMe();
 
