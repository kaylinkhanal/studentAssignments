
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

const lap= parseInt(laps);
const totalLap =laps[0] + laps[1] + laps[2];
console.log(totalLap);

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']

const pushArray = laps.push(newLap,newLap2)
console.log(pushArray);

// Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']

const popped =laps.pop();
console.log(popped);