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

const splitsentence=(sentence.split(' '))
const newsentence={
   

}
console.log(newsentence)

const phoneNumber = "123-456-7890";


// Expected output:
// "(123) 456-7890"





const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
 
const newemail=(email.split('@'))
const finaloutput={
    username:newemail[0],
    domain:newemail[1]
}
console.log(finaloutput)




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")


const output = words.filter((item)=>{
    if(item.charAt(0)=='a'){
    return item
    }
})
console.log(output)




const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)

console.log(mixedCase.toLowerCase())









const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
 console.log(phrase.split('').reverse().join('')===phrase)