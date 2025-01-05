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
const checkword = (sentence) => {
const words = sentence.split(" ");
const wordCount = {};

words.forEach((item) => {
wordCount[item]=wordCount[item]?wordCount[item]+1:1;
});
return wordCount
};
console.log(checkword(sentence))

// Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }



const phoneNumber = "123-456-7890";
const pnum=phoneNumber.split('-')
console.log(`(${pnum[0]}) ${pnum[1]}-${pnum[2]}`)

// Expected output:
// "(123) 456-7890"


const email = "test.user@example.com";
let str= email.split('@')
const obj={
    username:str[0],
    domain:str[1]
}
console.log(obj)
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }






const words = ["apple", "banana", "apricot", "kiwi", "avocado"];
const word=words.filter((item)=>{
    if(item[0]==="a")
        return item
})
console.log(word)
// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")



const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
const lower=mixedCase.toLowerCase()
console.log(lower)





const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)


const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
const Palindrome = (str) => {
return str === str.split("").reverse().join("");
};
console.log(Palindrome(phrase));
