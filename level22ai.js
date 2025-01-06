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
const words = sentence.split(" ");//split le sentence lai space ma split garxa
const wordCount = {};//wordCount lai empty object banako
words.forEach((word) => {//words ko word lai loop gareko
  if (wordCount[word]) {//if wordCount[word] is true
    wordCount[word]++;//wordCount[word] lai 1 increment gareko
  } else {
    wordCount[word] = 1;//wordCount[word] lai 1 assign gareko
  }
});
console.log(wordCount);



const phoneNumber = "123-456-7890";

// Expected output:
// "(123) 456-7890"
const number = phoneNumber.split("-");//split le phoneNumber lai - ma split garxa
const result = `(${number[0]}) ${number[1]}-${number[2]}`;//number ko 0th index lai () ma rakhne ani number ko 1st index lai - ma rakhne ani number ko 2nd index lai - ma rakhne
console.log(result);




const email = "test.user@example.com";

// Expected output:
// {
//   username: "test.user",
//   domain: "example.com"
// }
const emailSplit = email.split("@");////split le email lai @ ma split garxa
const emailObj = {
  username: emailSplit[0],//emailSplit ko 0th index lai username ma rakhne
  domain: emailSplit[1],//emailSplit ko 1st index lai domain ma rakhne
};
console.log(emailObj);




const word = ["apple", "banana", "apricot", "kiwi", "avocado"];

// Expected output:
// ["apple", "apricot", "avocado"] (all words starting with "a")
const aWords = word.filter((word) => word.startsWith("a"));//word ko word lai filter garera word.startsWith le a bata start vako word matra return garne
console.log(aWords);



const mixedCase = "HeLlO wOrLd";

// Expected output:
// "hello world" (all lowercase)
const lowerCase = mixedCase.toLowerCase();//mixedCase lai lowerCase ma convert garne
console.log(lowerCase);




const longString = "This is a very long string with multiple words.";

// Expected output:
// 7 (number of words)
const wordsCount = longString.split(" ").length;//longString lai split garera length nikalne
console.log(wordsCount);




const phrase = "racecar";

// Expected output:
// true (check if the string is a palindrome)
const reversePhrase = phrase.split("").reverse().join("");//phrase lai split garera reverse garera join garne
const isPalindrome = phrase === reversePhrase;//phrase ra reversePhrase same vaye true return garne
console.log(isPalindrome);


//reduce
const users = [
    {
      name: "Van Batchelder",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Winter Rubino",
      city: "Madrid",
      birthYear: null
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zion Shively",
      city: "Alabama",
      birthYear: 2002,
    }
  ];
  
  const currentYear = new Date().getFullYear();
  
  const userNames = users.reduce((filterUsers, user) => {
    if (user.birthYear && (currentYear - user.birthYear) > 25) {
      filterUsers.push(user.name);
    }
    return filterUsers;
  }, []);
  
  console.log(userNames);
  // ['Yusuf Shea']