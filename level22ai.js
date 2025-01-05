const sentence = "the quick brown fox jumps over the lazy dog";
const splittedsentence = sentence.split(' ')
let tempMap = {}
splittedsentence.forEach((item)=>{
    tempMap[item] = tempMap[item] ? ++tempMap[item] : 1
})
console.log(tempMap)

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
const [areaCode, prefixe, lineNumber] = phoneNumber.split('-')
console.log(`(${areaCode}) ${prefixe} ${lineNumber}`);


const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
let output1 = (email.split('@'));
console.log("username:", output1[0].slice()+ "  domain:",output1[1].slice());




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];
// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output = words.filter((words)=>{
    if(words[0] === 'a')
        return words
})
console.log(output);


const mixedCase = "HeLlO wOrLd";
// Expected output:
// "hello world" (all lowercase)
console.log(mixedCase.toLowerCase());


const longString = "This is a very long string with multiple words.";
// Expected output:
// 7 (number of words)


const phrase = "racecar";
// Expected output:
// true (check if the string is a palindrome)
console.log(phrase.split().reverse().join())