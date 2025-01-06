const results = {
<<<<<<< HEAD
  2023: [23, 12, 32],
  2024: [42, 54, 43],
  2025: [0, 0, 0],
};

//Q1 find  the all time highest score hint: use Math.max
//expected ouput is 54
const { 2023: year1, 2024: year2, 2025: year3 } = results;
console.log(Math.max(...year1, ...year2, ...year3));

=======
    2023: [23,12,32],
    2024: [42,54,43],
    2025: [0,0,0]
}
//Q1 find  the all time highest score hint: use Math.max
//expected output is 54
const { 2023: score2023, 2024:score2024,2025:score2025 }  = results
console.log(Math.max(...score2023, ...score2024, ...score2025))
>>>>>>> 1657f0bb4081084a5f467dd7c529685208d0b662
//Q2 remove 2025
//exepcted output {
//     2023: [23,12,32],
//     2024: [42,54,43],
// }
<<<<<<< HEAD

delete results[2025];
console.log(results);
//Q3 add all scores in a array
// [23,12,32,42,54,43]
year1.push(...year2);
console.log(year1);
=======
console.log({score2023,score2024})
//Q3 add all scores in a array
// [23,12,32,42,54,43,0,0,0]
console.log([...score2023, ...score2024,...score2025])

>>>>>>> 1657f0bb4081084a5f467dd7c529685208d0b662
