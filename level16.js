
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

const value1 = parseInt(laps[0])
const value2 = parseInt(laps[1])
const value3 = parseInt(laps[2])


const output = {
    totalLap: value1 + value2 + value3
}
console.log(output)

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']

laps.push(newLap,newLap2)
console.log(laps)

//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']

const output3 = laps.pop()
console.log(laps)