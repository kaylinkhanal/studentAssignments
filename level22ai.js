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
console.log


const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"
const splitPhone = phoneNumber.split('-')
console.log((splitPhone[0])+  splitPhone[1]+'-'+splitPhone[2])


const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
const splitedEmail = email.split('@')
const username = splitedEmail[0]
const domain = splitedEmail[1]
console.log({username: username,

domain: domain})



const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output = words.filter((item)=>{
    if (item[0] === 'a') return item
})
console.log(output)


const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
console.log(mixedCase.toLowerCase())

const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
console.log(phrase.split('').reverse().join('') === phrase)