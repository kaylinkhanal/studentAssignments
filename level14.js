const arr = [3,5,6,2,3]

//Q1. find length of arr
console.log(arr.length);


//Q2.remove first two indexes // expected output: [6,2,3]
let n = arr.splice(2);
console.log(n);

const details = [
    'ram',{fullMarks: 150}, {scores: [45,23,25]}
]

const [FullName, {fullMarks}, {scores:[subjectA, subjectB, subjectC]}] = details
//Q3. Find the percentage scored 
console.log(((subjectA+subjectB+subjectC)/fullMarks)*100);

