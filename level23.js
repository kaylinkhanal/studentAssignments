const obj = {
  math: 3,
  science:5,
  comp: 4
}

//O O
for (let item in obj){
  console.log(item)
}

//Calculate the sum of all score
let sum = 0 

for (const key in obj) {
  let item = obj[key]
  sum += item
}
console.log(sum)

const arr =[{ram:40},{gopal:50},{hari:60}]

// using for of/for in output the highest marks scorer
//expected ouput:
//hari

let highestScore = 0;
let highestScorer = "";

for (const studentObj of arr) {
  debugger;
  const [studentName, score] = Object.entries(studentObj); // Destructuring
  if (score > highestScore) {
    highestScore = score;
    highestScorer = studentName;
  }
}

console.log(highestScorer); // Output: hari

