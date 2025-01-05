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



const email = "test.user@example.com";
console.log({
    username:email.split('@')[0],
    domain:email.split('@')[1],
})
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")

const output =words.filter((items)=>{
    if(items[0]==='a'){
      return items
    }
})




const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
console.log(mixedCase.toLowerCase());



const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";
console.log(phrase.split('').reverse().join()==phrase)

// Expected output:
// true (check if the string is a palindrome)