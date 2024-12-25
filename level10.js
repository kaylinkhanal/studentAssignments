// // object : Spread and rest operator

const examDetails= {
    name: 'ram',
    examDate: '12/12/2020',
    highest:{
        subject: 'Math',
        score:99,
        attempts:1
    },
    lowest: {
        subject: 'Science',
        score:14,
        attempts: 3
    }
}
 
// console.log(examDetails)

// // ES6----------------

// const person = examDetails.name
// const subject = examDetails.heighest.subject


// const{name, examDate,...others} = examDetails;
// console.log(others)



// Q1. log the total scores secored in the lowest subject
// expected output is 42

const lowestscore = (examDetails.lowest.score * examDetails.lowest.attempts)
console.log(lowestscore);


// Q2. calculate the total percentage scored full marks each subject is 100,  
// hint scores should be picked : 99 and 14

const p = (examDetails.highest.score + examDetails.lowest.score)/200 * 100;
console.log(p)

// Q3. only extract subject and score from the lowest by using rest operator 
// Output shiuld be:
// {
 //   subject : 'Science',
//    score :14,
//}

const {attempts, ...other} = examDetails.lowest
console.log(other)

const previousAttempts = {
    science: {
        records: {
            '12/12/2020': 10,
            '12/11/2019':9
        }
    }
}
const {records} = previousAttempts.science
console.log(records['12/11/2019'] + records['12/12/2020'])




