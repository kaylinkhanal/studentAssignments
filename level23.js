const obj = {
  math: 3,
  science:5,
  comp: 4
}

//Calculate the sum of all score
let sum = 0;
for (let item in obj) {
  sum += obj[item];
}
console.log('Sum is ',sum)


// using for of output the highest marks scorer
const arr =[{ram:40},{gopal:50},{hari:60}];
let highestScorer = "";
let highestMarks = 0;

for (let student of arr) {
const [name, marks] = Object.entries(student)[0]; 
if (marks > highestMarks) {
    highestMarks = marks;
    highestScorer = name;
}
}
console.log("Highest scorer:", highestScorer); 
// using for in  output the highest marks scorer
let hScore='';
let hMarks=0;
for (const index in arr) {
const student = arr[index];
const name = Object.keys(student)[0];
const marks = student[name];        
if (marks > hMarks) {
    hMarks = marks;
    hScore = name;
}
}
console.log(hScore); 

