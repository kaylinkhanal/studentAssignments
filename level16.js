
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

const firstnumber=parseInt(laps[0])
const secondenumber=parseInt(laps[1])
const thirdnumber=parseInt(laps[2])
const sum={
    totallap:firstnumber+secondenumber+thirdnumber
}
console.log(sum)

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']

let pushlaps=laps.push(newLap,newLap2)
console.log(pushlaps)
console.log(laps)

//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
 const popitem=laps.pop(newLap2)
console.log (laps)