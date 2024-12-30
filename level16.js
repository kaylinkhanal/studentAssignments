
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }
// const num1=parseInt(laps[0])
// const num2=parseInt(laps[1])
// const num3=parseInt(laps[2])
console.log({
    totallap:parseInt(laps[0])+ parseInt(laps[1]) +parseInt(laps[2])
})




const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
laps.push('14km')
laps.push('11km')
console.log(laps)

//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop('11km')
console.log( laps)