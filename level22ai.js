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

const senArray = sentence.split(' ')
const obj = {}
senArray.forEach((item)=>{
    if(!obj[item]){
        obj[item] = 1
    }else{
        obj[item] +=1
    }
})
console.log(obj)
const phoneNumber = "123-456-7890";
const phone3 = phoneNumber.slice(0,3)
console.log(phoneArray)
const phone = `(${phone3}) ${phoneNumber.slice(3)}`
console.log()

// Expected output:
// "(123) 456-7890"



const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }




const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const filterA = words.filter((item)=>{
    if(item[0] === 'a'){
        return item
    }
})
console.log(filterA)


const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
const mixedCaseArray = mixedCase.split(' ')
const output = mixedCaseArray.map((item)=> item.toLocaleLowerCase())
console.log(output.join(' '))


const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)




const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)