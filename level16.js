
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

let [lap1, lap2, lap3] = laps;
lap1 = parseInt(lap1)
lap2 = parseInt(lap2)
lap3 = parseInt(lap3);
let totalLap = lap1 + lap2 + lap3;
console.log({totalLap});



const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
laps.push(newLap, newLap2);
console.log(laps);



//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop();
console.log(laps);