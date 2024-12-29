const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)


//Q2.remove first two indexes // expected output: [6,2,3]
console.log(arr.slice(2))
const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
//using reduce method
const sum=details[2].scores.reduce((acc,curr)=>acc+curr,0)
console.log((sum / details[1].fullMarks) * 100);
//without reduce method simply adding the scores
const sums=details[2].scores[0]+details[2].scores[1]+details[2].scores[2]
console.log((sums / details[1].fullMarks) * 100);
//using destructuring
const [fullname,{fullMarks}, {scores:[sub1,sub2,sub3]}]=details
console.log((sub1+sub2+sub3)/fullMarks*100)
