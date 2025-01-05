const sentence = "the quick brown fox jumps over the lazy dog";

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

// const spiltSentence = sentence.split(" ");

// spiltSentence.filter((item) => {});

const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"

// console.log(phoneNumber.split("-"));

const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }

const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")

const startingALetter = words.filter((item) => {
  if (item.charAt(0) === "a") return item;
  //   console.log(item);
});

console.log(startingALetter);

const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)

console.log(mixedCase.toLocaleLowerCase());

const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)

const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
