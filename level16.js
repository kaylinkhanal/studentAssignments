const laps = ["10km", "12km", "13km"];

//Q1. expected output =
// {
//   totalLap: 35
// }

const [one, two, three] = laps;
const newone = one.slice(0, -2);
const newtwo = two.slice(0, -2);
const newthree = three.slice(0, -2);
console.log(Number(newone) + Number(newtwo) + Number(newthree));

const newLap = "14km";
const newLap2 = "11km";
// Q2. console.log laps, expected output
// ['10km', '12km', '13km', '14km','11km']

laps.push(newLap);
laps.push(newLap2);
console.log(laps);

//Q3. pop last lap from the array
//  console.log laps, expected output
// ['10km', '12km', '13km', '14km']
laps.pop();
console.log(laps);
