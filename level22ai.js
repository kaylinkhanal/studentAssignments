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
//hint 1 : get something like: 
// ['the', 'quick' ,'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog];
//hint 2: loop the array

const phoneNumber = "123-456-7890";
const [areaCode, prefix, lineNumber] = phoneNumber.split('-')
console.log(`(${areaCode}) ${prefix}-${lineNumber}`)
// Expected output:
// "(123) 456-7890"

function useSplit(phoneNumber){
  const output = phoneNumber.split('-')
  return `(${output[0]}) ${output[1]} ${output[2]}`
}
console.log(useSplit(phoneNumber))


const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }

function output(email){
    const useSplit = email.split('@')
    return {
        userName: useSplit[0],
        domain: useSplit[1]
    };
}
console.log(output(email))



const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const result = words.filter((item)=>{
  if (item[0] === 'a')
    return item
})
console.log(result)



const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase())

// Expected output:
// "hello world" (all lowercase)

console.log(mixedCase.toLowerCase())





const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
// Expected output:
// true (check if the string is a palindrome)
console.log(phrase.split('').reverse().join().split())