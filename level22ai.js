// const sentence = "the quick brown fox jumps over the lazy dog";

// const arr = sentence.split(" ");
// console.log(arr);

// let worcCount = {};
// arr.forEach((item) => {
//   item: 1;
// });

// // Expected output:
// // {
// //   the: 2,
// //   quick: 1,
// //   brown: 1,
// //   fox: 1,
// //   jumps: 1,
// //   over: 1,
// //   lazy: 1,
// //   dog: 1
// // }

// const phoneNumber = "123-456-7890";

// let frontphoneNumber = "";
// let backphoneNumber = "";
// for (let i = 0; i < phoneNumber.length; i++) {
//   if (i < 4) {
//     if (phoneNumber[i] === "-") {
//       continue;
//     } else {
//       frontphoneNumber += phoneNumber[i];
//     }
//   } else {
//     backphoneNumber += phoneNumber[i];
//   }
// }
// console.log("(", frontphoneNumber, ")", backphoneNumber);
// // Expected output:
// // "(123) 456-7890"

// const email = "test.user@example.com";
// domain = "";
// username = "";

// indexofadd = email.indexOf("@");
// console.log(indexofadd);
// for (i = 0; i < email.length; i++) {
//   if (i > indexofadd) {
//     domain += email[i];
//   }
//   if (i < indexofadd) {
//     username += email[i];
//   }
// }
// console.log("username:", username);
// console.log("domain:", domain);
// // Expected output:
// // {
// //   username: "test.user",
// //   domain: "example.com"
// // }

// const words = ["apple", "banana", "apricot", "kiwi", "avocado"];
// words.forEach((item) => {
//   if (item[0].toLowerCase() === "a") {
//     console.log(item);
//   }
// });
// // Expected output:
// // ["apple", "apricot", "avocado"] (all words starting with "a")

// const mixedCase = "HeLlO wOrLd";

// console.log(mixedCase.toLowerCase());

// // Expected output:
// // "hello world" (all lowercase)

// const longString = "This is a very long string with multiple words.";
// const splitedlongstring = longString.split(" ");
// length = 0;
// splitedlongstring.forEach((item) => {
//   if (item.length < 3) {
//     console.log(item);
//   } else {
//     length++;
//   }
// });
// console.log(length);

// // Expected output:
// // 7 (number of words)

// const phrase = "racecar";

// reverse_phrase = phrase.split("").reverse().join("");

// if (reverse_phrase === phrase) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // Expected output:
// // true (check if the string is a palindrome)

const numbers = [175, 50, 25];

roshan = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(roshan);

const numbe = [15.5, 2.3, 1.1, 4.7];
dangol = numbe.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

console.log(dangol);
