
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }
//using reduce method
const totalLap = laps.reduce((acc,curr)=>acc+parseInt(curr),0)
console.log({totalLap})
//without reduce method
const totalLap2 = parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
console.log({totalLap2})

console.log({
    totalLap: parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
})

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
// laps.push(newLap)
// laps.push(newLap2)
// laps.push(...[newLap,newLap2])
laps.push(newLap, newLap2)
console.log(laps)


//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)