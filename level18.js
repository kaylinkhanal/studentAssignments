let pocketMoney = 200;

// function buyChocolate(price, chocolate) {
//   const remainingAmount = pocketMoney / price;
//   return (
//     "you can buy " +
//     parseInt(remainingAmount) +
//     " " +
//     chocolate +
//     " " +
//     "with your pocket money"
//   );
// }

//Q1. expected output:
//You can buy 20 kitkat with your pocketmoney
// You can buy 10 dairymilk with your pocketmoney

function buyChocolate(price, chocolate) {
  const remainingAmount = pocketMoney / price;
  return (
    "you can buy " +
    parseInt(remainingAmount) +
    " " +
    chocolate +
    " " +
    "with your pocket money"
  );
}

console.log(buyChocolate(11, "kitkat")); //arguments
console.log(buyChocolate(20, "dairymilk"));

//Q2. expected output:
//you have 170 Rs remaining
//you have 90 Rs remaining
