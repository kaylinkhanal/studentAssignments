const obj = {
  math: 3,
  science:5,
  comp: 4
}

//O O
// for (let item in obj){
//   console.log(item)
// }

//Calculate the sum of all score
let sum = 0
for(let item in obj){
  sum += obj[item]
}
console.log(sum)
const arr =[{ram:40},{gopal:50},{hari:60}]

// using for of/for in output the highest marks scorer
//expected ouput:
//hari
// let highUser = ''
// for(let user of arr){
//   let high = 0
//   for(let people in user){
//     if(user[people] > high){
//       high = user[people]
//       highUser = people
//     }
//   }
// }
// console.log(highUser)
let higherScorer = ''
let score = 0
for(let key of arr){
  const keyArray =  Object.values(key)
  const keysArray = Object.keys(key)
  const [mrk] = keyArray
  const [name] = keysArray
  if(mrk > score){
    score = mrk
    higherScorer = name
  }
}
console.log(higherScorer)
