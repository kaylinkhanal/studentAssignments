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
const words1 = sentence.split(" ");
let count = 0;
let obj = {};
words1.map((item)=>{
if(obj[item]){
    obj[item]++
}
else{
  obj[item]=1
}

})
console.log(obj)


const phoneNumber = "123-456-7890";

const phone = `(${phoneNumber.split("-")[0]}) ${phoneNumber.split("-").slice(1).join("-")}`
console.log(phone)



const email = "test.user@example.com";


// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
const username = email.split("@")[0]
const domain = email.split("@")[1]
console.log({username, domain})






const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const filtered = words.filter((item)=>{
    if(item.startsWith("a")){
        return item
    }
})
console.log(filtered)



const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
const lowerCase=mixedCase.toLowerCase()
console.log(lowerCase)



const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)
const words2 = longString.split(" ");








const phrase = "racecar";


// Expected output:
// true (check if the string is a palindrome)
const checkPallindrome=(phrase)=>{
    if(phrase===phrase.split("").reverse().join("")){
        return true
    }
    else{
        return false
    }
}
console.log(checkPallindrome(phrase))