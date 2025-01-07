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
console.log(sentence.split(' '))

const phoneNumber = "123-456-7890"

const [areacode,prefix,LineNumber]= phoneNumber.split('-')
console.log(`${()}`)
=======
//hint 1 : get something like: 
// ['the', 'quick' ,'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog];
//hint 2: loop the array

const phoneNumber = "123-456-7890";
const [areaCode, prefix, lineNumber] = phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
// Expected output:
// "(123) 456-7890"()

<<<<<<< HEAD
console.log(phoneNumber.split('-'))


=======
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
console.log({
<<<<<<< HEAD
    username: email.split('@')[0],
    domain:email.split('@')[1],
})

   
    




=======
    userName: email.split('@')[0],
    domain: email.split('@')[1],
})
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

const words = ["apple", "banana", "apricot", "kiwi", "avocado"];
const output= words.filter((item)=>{
    if(item.charAt(0) =='a'){
        return item
    }
})
console.log(output)
// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output = words.filter((item)=>{
if(item[0] === 'a') return item
})
console.log(output)

const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase())

// Expected output:
// "hello world" (all lowercase)

<<<<<<< HEAD
console.log(mixedCase.toLowerCase())

const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";
console.log(phrase.split('').reverse('').join('')=== phrase)
=======
const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
// Expected output:
// true (check if the string is a palindrome)

