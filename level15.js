const details = {
    user: {
        name: 'ram khanal'
    },
    subjects: ['math','science']
}

const subjects= {
    math: 35,
    science: 36,
    computer: 56
}


//Expected output: 
// {
//     user: {
//         name: 'ram khanal'
//     },
//     subjects: [35,36]
// }


//--- using flatMap case method ------3

details.subjects = details.subjects.flatMap(subject => subjects[subject])
console.log(details)


//____________ using map case method_______________//

details.subjects = details.subjects.map(subject => subjects[subject])
console.log(details)


