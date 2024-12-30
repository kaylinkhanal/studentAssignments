// @ts-ignore
const laps = ["10km", "12km", "13km"];

//Q1. expected output =
// {
//   totalLap: 35
// }

// @ts-ignore
const laps = ["10km", "12km", "13km"];

const calculateTotalLap = (laps) => {
  // Extract numbers and calculate the total
  const total = laps
    .map((lap) => parseInt(lap)) // Convert '10km' -> 10
    .reduce((sum, distance) => sum + distance, 0); // Sum up all distances

  return { totalLap: total };
};

console.log(calculateTotalLap(laps));
// Output: { totalLap: 35 }

const newLap = "14km";
const newLap2 = "11km";
// Q2. console.log laps, expected output
// ['10km', '12km', '13km', '14km','11km']

//Q3. pop last lap from the array
//  console.log laps, expected output
// ['10km', '12km', '13km', '14km']
