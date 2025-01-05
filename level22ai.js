//Q1.
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
const splittedSetence=sentence.split(' ')
let temMap={}
splittedSetence.forEach((item)=>{
    temMap[item]=temMap[item] ? ++temMap[item]:1
})
console.log(temMap)


//Q2.
const phoneNumber = "123-456-7890";
const[areaCode,prefix,lineNumber]=phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)

// Expected output:
// "(123) 456-7890"




//Q3.
const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
console.log({
    userName:email.split('@')[0],
    domain:email.split('@')[1],
})



//Q4.
const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")


const output = words.filter((item)=>{
    if(item.charAt(0)=='a'){
    return item
    }
})
console.log(output)


//Q5.

const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)

console.log(mixedCase.toLowerCase())







//Q6.

const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
 console.log(phrase.split('').reverse().join('')===phrase)