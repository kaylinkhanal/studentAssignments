const obj = {
  math: 3,
  science:5,
  comp: 4
}

let sum = 0
//O O
for (let item in obj){
  sum= sum + obj[item]
}
console.log(sum);


//Calculate the sum of all score

const arr =[{ram:40},{gopal:50},{hari:60}]


// using for of/for in output the highest marks scorer
//expected ouput:
//hari
let abc= 0
for (let score in arr){
  console.log(abc=arr[score])
}

const {name:name, mark:mark} = abc
console.log(mark);



