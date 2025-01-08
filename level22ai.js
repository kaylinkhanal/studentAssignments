<<<<<<< HEAD
 const sentence = "the quick brown fox jumps over the lazy dog";
 const splittedSentence = sentence.split(" ");
 let temp=
=======
const sentence = "the quick brown fox jumps over the lazy dog";
const splittedSentence = sentence.split(' ')
let tempMap = {}
splittedSentence.forEach((item)=>{
    tempMap[item] =  tempMap[item] ?  ++tempMap[item] : 1
})
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

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

   
 



 const phoneNumber = "123-456-7890";



// Expected output:
// "(123) 456-7890"

  





=======
//hint 1 : get something like: 
// ['the', 'quick' ,'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog];
//hint 2: loop the array

const phoneNumber = "123-456-7890";
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
<<<<<<< HEAD

 
 

   
 


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
if(item[0] === 'a') return item
})
console.log(output)

<<<<<<< HEAD
  const mixedCase = "HeLlO wOrLd";
=======
const mixedCase = "HeLlO wOrLd";
console.log(mixedCase.toLowerCase())
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736

// Expected output:
// "hello world" (all lowercase)
 

 const lowerCaseString = mixedCase.toLowerCase();

//console.log(lowerCaseString);  // Outputs: hello world

<<<<<<< HEAD



//const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




 const phrase = "racecar";

=======
const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
>>>>>>> d1aa61cb1656516302a136e89076af313da6f736
// Expected output:
// true (check if the string is a palindrome)

