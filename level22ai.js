const sentence = "the quick brown fox jumps over the lazy dog";
const splittedSentence = sentence.split(" ");
let tempMap = {};
splittedSentence.forEach((item) => {
  tempMap[item] = tempMap[item] ? ++tempMap[item] : 1;
});

// Expected output:
// {
//   the: 2,
//   quick: 1,
//   brown: 1,
//   fox: 1,
//   jumps: 1,
//   over: 1,
//   lazy: 1,
//   dog: 1
// }

const spiltSentences = sentence.split(" ");

const phoneNumber = "123-456-7890";
const [areaCode, prefix, lineNumber] = phoneNumber.split("-");
console.log(`(${areaCode}) ${prefix}-${lineNumber}`);
// Expected output:
// "(123) 456-7890"

const [first, second, third] = phoneNumber.split("-");
console.log(`(${first}) ${second}-${third}`);

// console.log(phoneNumber.split("-"));

const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
const spiltEmail = email.split("@");
const [username, domain] = spiltEmail;
console.log({ username, domain });

const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")

const startingALetter = words.filter((item) => {
  if (item.charAt(0) === "a") return item;
});

console.log(startingALetter);

const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase());

// Expected output:
// "hello world" (all lowercase)

console.log(mixedCase.toLocaleLowerCase());

const phrase = "racecar";
console.log(phrase.split("").reverse().join());

// Expected output:
// true (check if the string is a palindrome)
