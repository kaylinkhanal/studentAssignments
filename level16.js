const laps = ["10km", "12km", "13km"];

//Q1. expected output =
// {
//   totalLap: 35
// }

const firstNumber = laps[0].slice(0, 2);
const secondNumber = laps[1].slice(0, 2);
const thirdNumber = laps[2].slice(0, 2);

const newLapsObject = {
  totalLaps: Number(firstNumber) + Number(secondNumber) + Number(thirdNumber),
};

console.log(newLapsObject);

const newLap = "14km";
const newLap2 = "11km";
// Q2. console.log laps, expected output
// ['10km', '12km', '13km', '14km','11km']

laps.push(newLap, newLap2);
console.log(laps);

//Q3. pop last lap from the array
//  console.log laps, expected output
// ['10km', '12km', '13km', '14km']

laps.pop();
console.log(laps);
