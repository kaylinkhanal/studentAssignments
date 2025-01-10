
//for in for of loop


const obj = {
  math: 3,
  science:5,
  comp: 4
}

//O O not possible O I possible
// for (let item in obj){
//   console.log(item)
// }

//Calculate the sum of all score

let sum = 0
for (score in obj){
    sum += obj[score]
}
console.log(sum)



const arr =[{ram:40},{gopal:50},{hari:60}]

// using for of/for in output the highest marks scorer
//expected ouput:
//hari

let highest_score = 0   // to find highest_score by comparing with each individual with each loop iterations
let highest_scorer = ''

// to find highest score. If at each iteration, new highest score is found, the highest_score gets updated
for (item of arr){
    for (person in item){    // to get the property name of current object
        if (item[person] > highest_score){  //comparing score of current person with current highest_sore
            highest_score = item[person]
            highest_scorer = person
        }
    }
}

console.log(highest_score)
console.log(highest_scorer)