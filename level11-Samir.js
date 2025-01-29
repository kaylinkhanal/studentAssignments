const technical_A = {
    math: 32,
    science: 40
}

const technical_B = {
    computer: 40,
    gk: 30
}

const output = {
    ...technical_A,
    ...technical_B
}

console.log(output)
//Q1 output should be {
//     math: 32,
//     science: 40,
//     computer: 40,
//     gk: 30
// }


const practical_B = {
    computer: 50,
    gk:20
}
const total = {
    ...output,
    computer_prac: practical_B.computer,
    gk_prac: practical_B.gk
}
    console.log(total)
//Q1 output should be {
//     math: 32,
//     science: 40,
//     computer: 40,
//   gk: 30,
    //   computer_prac: 50,
    // gk_prac:20
// }




