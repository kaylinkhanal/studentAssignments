
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }
const[first, second, third] = laps
const firstNum = first.slice(0,-2)
const secondNum = second.slice(0,-2)
const thirdNum = third.slice(0,-2)
console.log({totalLap:Number(firstNum)+Number(secondNum)+Number(thirdNum)})

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
laps.push(newLap)
laps.push(newLap2)
console.log(laps)


//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)