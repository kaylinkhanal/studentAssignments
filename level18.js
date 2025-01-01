let pocketMoney= 200

function buyChocolate(price, chocolate){
    // const remainingAmount = pocketMoney - price;
    const quantity = Math.floor(pocketMoney / price);
    return (`you can buy ${quantity} ${chocolate} with your pocketmoney`);
}

console.log(buyChocolate(11, 'kitkat')) //arguments
console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

