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


details.subjects[0] = subjects.math;
console.log(details)

//Expected output: 
// {
//     user: {
//         name: 'ram khanal'
//     },
//     subjects: [35,36]
// }