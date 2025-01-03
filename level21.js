const scores = [
    ['math',99], ['science',93], ['computer',95]
]

//Q1. calculate the percentage scored
let total = 0

scores.forEach((item) => {
    total += item[1]
})
let percentage = total/300*100
console.log(percentage.toFixed(2))


//Q2. What is the lowest marks scored? expected output: 93
let scores_arr = []
scores.forEach((item) => {
    scores_arr.push(item[1])
})

console.log(Math.min(...scores_arr))

// Alternative
let lowest_score = 100

scores.forEach((item) => {
    if (item[1] < lowest_score) lowest_score = item[1]
})

console.log(lowest_score)