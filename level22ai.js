//1.
const sentence = "the quick brown fox jumps over the lazy dog";
const splittedSentence = sentence.split(' ')
let tempMap = {}
splittedSentence.forEach((item)=>{
    tempMap[item] = tempMap[item] ? tempMap[item] : 1
})
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



//2.
const phoneNumber = "123-456-7890";
const [areaCode, prefix,lineNumber] = phoneNumber.split(' ')
console.log('(${areacode}) ${prefix}-${lineNumber}')

// Expected output:
// "(123) 456-7890"


//3.
const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
console.log({
    userName: email.split('@')[0],
    domain: email.split('@[1]'),
})




//4.
const words = ["apple", "banana", "apricot", "kiwi", "avocado"];
// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output = words.filter((item)=>{
    if(item[0] === 'a') return item
})
console.log(output)



//5.
const mixedCase = "HeLlO wOrLd";
// Expected output:
// "hello world" (all lowercase)
console.log(mixedCase.toLowerCase())


//6.
const longString = "This is a very long string with multiple words.";
// Expected output:
// 7 (number of words)



//7.
const phrase = "racecar";
console.log(phrase,split('').reverse().join('') === phrase)
// Expected output:
// true (check if the string is a palindrome)
let revPhrase = phrase.split("").reverse().join("");
if (phrase === revPhrase) {
    console.log(true);
} else {
    console.log(false);
}