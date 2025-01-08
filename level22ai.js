//Q1.
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
const splittedSetence=sentence.split(' ')
let temMap={}
splittedSetence.forEach((item)=>{
    temMap[item]=temMap[item] ? ++temMap[item]:1
})
console.log(temMap)

=======
//hint 1 : get something like: 
// ['the', 'quick' ,'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog];
//hint 2: loop the array
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

//Q2.
const phoneNumber = "123-456-7890";
<<<<<<< HEAD
const[areaCode,prefix,lineNumber]=phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)

// Expected output:
// "(123) 456-7890"




//Q3.
=======
const [areaCode, prefix, lineNumber] = phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)
// Expected output:
// "(123) 456-7890"

>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
console.log({
<<<<<<< HEAD
    userName:email.split('@')[0],
    domain:email.split('@')[1],
})



//Q4.
=======
    userName: email.split('@')[0],
    domain: email.split('@')[1],
})

>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
<<<<<<< HEAD


const output = words.filter((item)=>{
    if(item.charAt(0)=='a'){
    return item
    }
})
console.log(output)


//Q5.
=======
const output = words.filter((item)=>{
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







//Q6.

=======
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
// Expected output:
// true (check if the string is a palindrome)
 console.log(phrase.split('').reverse().join('')===phrase)
 