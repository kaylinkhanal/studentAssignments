// //optional  chining (?.) in object

// const user = {
//     dog: {
//         name: 'Alex'
//     }
// };
// // console.log(user.dog?.name)
// // console.log(user.dog.name);
// const {name} = user.dog
// console.log(name)


// // function call 

// let fruits = () => console.log('mango');
// let price = {
//     mango(){
//         console.log('its prices is 250')
//     }
// };

// fruits?.();
// price.mango?.()

const userDetails = {
    hari :{
        ielts: {
            '12/2/2020': 32
        }
    },
    shyam : {
        pte:{
            '12/2/2020' :34
        }
    }
}

// Q1. log 32
console.log(userDetails.hari.ielts['12/2/2020'])

//Q2. optionally chain the following:
console.log(userDetails.shyam.ielts?.['12/2/2020'])





const technical_A = {
    math: 32,
    science: 40
}
 
const technical_B = {
    computer: 40,
    gk: 30
}
 
//Q1 output should be {
//     math: 32,
//     science: 40,
//     computer: 40,
//   gk: 30
// }
const technical_C = {...technical_A , ...technical_B}
console.log(technical_C)


 
 
const practical_B = {
    computer: 50,
    gk:20
}
 
//Q2 output should be {
//     math: 32,
//     science: 40,
//     computer: 40,
//   gk: 30,
    //   computer_prac: 50,
    // gk_prac:20
// }
 

const total = {
    ...technical_A,
    ...technical_B,
    computer_prac: practical_B.computer,
    gk_prac: practical_B.gk
}
 console.log(total)