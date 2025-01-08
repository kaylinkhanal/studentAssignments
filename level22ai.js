const sentence = "the quick brown fox jumps over the lazy dog";
const splittedSentence = sentence.split(' ')
let tempMap = {}
splittedSentence.forEach((item)=>{
    tempMap[item] =  tempMap[item] ?  ++tempMap[item] : 1
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

const breaked = sentence.split(" ");
let output = {};
breaked.forEach((item) => {
    output[item] = output[item] ? output[item] += 1 : 1;
})
console.log(output);


// Q
const phoneNumber = "123-456-7890";

const first3 = phoneNumber.split('-')[0];
const last =phoneNumber.slice(4);
console.log(`(${first3}) ${last}`);
// Expected output:
// "(123) 456-7890"


// Q
const email = "test.user@example.com";

let splitted = email.split('@');

let obj = {
    username: splitted[0],
    domain: splitted[1]
}
console.log(obj);
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
console.log({
    userName: email.split('@')[0],
    domain: email.split('@')[1],
})

// Q
const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

const wordsWithA = words.filter((item) => {
    if (item[0] === 'a'){
        return item;
    }
})
console.log(wordsWithA);
// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
// const output = words.filter((item)=>{
// if(item[0] === 'a') return item
// })
// console.log(output)

// Q
const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase())

console.log(mixedCase.toLowerCase());

// Expected output:
// "hello world" (all lowercase)


// Q
const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)



// Q
const phrase = "racecar";

const palindrome = () => {
    if (phrase === phrase.split('').reverse().join('')) {
        return true;
    }
    }
    console.log(palindrome());
// Expected output:
// true (check if the string is a palindrome)
