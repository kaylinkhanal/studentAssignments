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

const splitSentence = sentence.split(" ")
const tempMap = {}
splitSentence.forEach((item)=>{
    tempMap[item] = tempMap[item] + item ? item : 1
})

console.log(tempMap)



const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"

const [areacode, expres,        linenumber] = phoneNumber.split("-")
console.log(`(${areacode}) ${expres}-${linenumber}`)
const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }

const splitEmail = email.split('@')

const [userName, domainName] = splitEmail

const output3 = {
    username : userName,
    domain: domainName
}

console.log(output3)

const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const output4 = words.filter(
    (word) =>{
        if(word[0] === 'a')
            return word
    }
)

console.log(output4)


const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)

const lowercase = mixedCase.toLocaleLowerCase()
console.log(lowercase)

// const longString = "This is a very long string with multiple words.";

// // Expected output:
// // 7 (number of words)




const phrase = "racecar";


// Expected output:
// true (check if the string is a palindrome)

let revPhrase = phrase.split("").reverse().join("");
if (phrase === revPhrase) {
  console.log(true);
} else {
  console.log(false);
}
