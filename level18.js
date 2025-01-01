let pocketMoney = 200;

function buyChocolate(price, chocolate) {
  const remainingAmount = pocketMoney / price;
  // return ' you buy cholocate' + chocolate + 'you will have '+ remainingAmount
  return (
    "you can buy " +
    parseInt(remainingAmount) +
    " " +
    chocolate +
    " " +
    "with your pocket money"
  );
  //  return 'you can buy'+ remainingAmount+ chocolate+ 'with your pocket money'
}

console.log(buyChocolate(11, "kitkat")); //arguments
console.log(buyChocolate(20, "dairymilk"));

//Q1. expected output:
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney
