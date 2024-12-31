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

const {user, subjects : [subject1,subject2]} =details
const output = {
    user,
    subjects : [subjects[subject1],subjects[subject2]],
};
console.log(output)