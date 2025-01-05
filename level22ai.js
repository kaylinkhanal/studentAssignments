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

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")

const filtered= words.filter((num)=>{
  if(num[0] === 'a')
  {
    return true
  }
  else{
    return false
  }
 
})




const mixedCase = "HeLlO wOrLd";

const mixCase = mixedCase.toLocaleLowerCase;
console.log(mixCase);

// Expected output:
// "hello world" (all lowercase)





const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";

const palindrome = phrase.split('').reverse.join('')

return phrase = palindrome

// Expected output:
// true (check if the string is a palindrome)clear