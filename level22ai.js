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


const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"

function useSplit(phoneNumber){
  const output = phoneNumber.split('-')
  return `(${output[0]}) ${output[1]} ${output[2]}`
}
console.log(useSplit(phoneNumber))


const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")



const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)



const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)