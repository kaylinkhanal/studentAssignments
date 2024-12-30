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
const {user,...rest}=details
const {math,science,computer}=subjects
console.log({
    user,
    subjects: [math,science]
})