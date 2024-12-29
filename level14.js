const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length)

//Q2.remove first two indexes // expected output: [6,2,3]
const a=[3,5,6,2,3]
a.splice(0, 2) 
console.log(a)


const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]
const  [fullName, {fullMarks},{scores:[subjectA, subjectB,subjectC]}]=details
const perc=((subjectA+ subjectB+subjectC) /fullMarks)*100
console.log(perc)
//Q3. Find the percentage scored 
// console.log(details[2])
