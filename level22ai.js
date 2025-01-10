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
<<<<<<< HEAD
console.log

=======
//hint 1 : get something like: 
// ['the', 'quick' ,'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog];
//hint 2: loop the array
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const phoneNumber = "123-456-7890";
const [areaCode, prefix, lineNumber] = phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)
// Expected output:
// "(123) 456-7890"
<<<<<<< HEAD
const splitPhone = phoneNumber.split('-')
console.log((splitPhone[0])+  splitPhone[1]+'-'+splitPhone[2])

=======
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
<<<<<<< HEAD
const splitedEmail = email.split('@')
const username = splitedEmail[0]
const domain = splitedEmail[1]
console.log({username: username,

domain: domain})


=======
console.log({
    userName: email.split('@')[0],
    domain: email.split('@')[1],
})
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output = words.filter((item)=>{
<<<<<<< HEAD
    if (item[0] === 'a') return item
})
console.log(output)

=======
if(item[0] === 'a') return item
})
console.log(output)
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase())

// Expected output:
// "hello world" (all lowercase)
<<<<<<< HEAD
console.log(mixedCase.toLowerCase())

const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)



=======
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
// Expected output:
// true (check if the string is a palindrome)
console.log(phrase.split('').reverse().join('') === phrase)