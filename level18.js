let pocketMoney= 200

function buyChocolate(count){
    const item1 = Math.floor(pocketMoney/count);
    return 'you can buy ' + item1 + '  with your Pocketmoney'
}

console.log(buyChocolate(11, 'kitkat')) //arguments
console.log(buyChocolate(20, 'dairymilk'))



//Q1. expected output: 
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney