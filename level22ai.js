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
const phone = `(${phone3}) ${phoneNumber.slice(4)}`
console.log(phone)

// Expected output:
// "(123) 456-7890"

const email = "test.user@example.com";
// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
const emailArray = email.split('@')
const obj1= {username: emailArray[0],
    domain: emailArray[1]
}
console.log(obj1)





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
console.log(mixedCase.toLowerCase())

// Expected output:
// "hello world" (all lowercase)
const mixedCaseArray = mixedCase.split(' ')
const output = mixedCaseArray.map((item)=> item.toLowerCase())
console.log(output.join(' '))





const phrase = "racecar";
console.log(phrase.split('').reverse().join('') === phrase)
// Expected output:
// true (check if the string is a palindrome)
const phraseArray = phrase.split('').reverse().join('')
if(phrase === phraseArray){
    console.log(true)
}else{
    console.log(false)
}

