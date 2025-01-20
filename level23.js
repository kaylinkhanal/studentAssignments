const obj = {
  math: 3,
  science:5,
  comp: 4
}

let sum = 0
//O O
for (let item in obj){
  sum = sum  + obj[item]
  //do code changes
}
console.log(sum)
//Calculate the sum of all score

const arr =[{ram:40},{gopal:50},{hari:60}]

const output = arr.reduce((highScorer, nextItem, nextId)=>{
  const [name, scores] =  Object.entries(nextItem)[0]
  if(scores> highScorer[0]){
    highScorer[0]= scores
    highScorer[1] = name
  }
return highScorer
},[0,''])

console.log(output)
// using for of/for in output the highest marks scorer
//expected ouput:
//hari
