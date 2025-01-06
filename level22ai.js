//Q
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

let all_words = sentence.split(' ')
//converting to set for getting unique words
let unique_words = Array.from(new Set(all_words))
console.log(unique_words)


let counter = [0,0,0,0,0,0,0,0]
for (let i=0; i<unique_words.length; i++){
    for (let j=0; j<all_words.length; j++){
        if(unique_words[i]==all_words[j]){
            counter[i] = counter[i]+1
        }
    }
}
console.log(counter)
let output = {}
for (let i=0; i<unique_words.length; i++){
    output[unique_words[i]] = counter[i]
}
console.log(output)


//Q
const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"
let splitted = phoneNumber.split('-')
console.log(`(${splitted[0]}) ${splitted[1]}-${splitted[2]}`)


//Q
const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
let split = email.split('@')
console.log({username: `${split[0]}`, domain: `${split[1]}`})


//Q
const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const a_words = words.filter((item) => {
    return item[0]==='a'
})
console.log(a_words)


//Q
const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
console.log(`${mixedCase.toLowerCase()}`)



//Q
const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
function palindrome_checker(word){
    reversed = word.split('').reverse().join('')
    if(reversed === word) console.log('It is a palindrome')
    else console.log('Not a palindrome')
}

palindrome_checker('hih')