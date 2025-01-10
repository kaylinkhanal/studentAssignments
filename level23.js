
//for in for of loop

// Q1
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


// Q2
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

// Alternative: using only one loop
highest_scorer = ''
highest_score = 0
for (let item of arr){
    // covert {name:score} to [name, score]
    // console.log(Object.entries(item))

    const [name,score] = Object.entries(item)[0]

    if(score > highest_score) {
        highest_score = score
        highest_scorer = name
    }
}

console.log(highest_scorer)


//Alternative: reduce loop

const output = arr.reduce((highScorer, currentItem) => {
    let [names, scores] = Object.entries(currentItem)[0]
    if (scores > highScorer[0]){
        highScorer[0] = scores
        highScorer[1] = names
    }
    return highScorer;
}, [0, '']);

console.log(output[1])


//using for loop, you have to solve problem within th same block of code
// but within map, filter and reduce, we can return value or do optional chaining to create modules,
// breaking down problem into different blocks