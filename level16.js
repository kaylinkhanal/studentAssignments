
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }
//use parseInt() to convert string to number
//use replace() to remove 'km' from the string
//using reduce method to calculate the total lap
const totalLap = laps.reduce((acc, lap) => {
    return acc + parseInt(lap.replace('km',''))
},0)
console.log({totalLap})

//using without reduce method
let totalLap2 = 0
for(let lap of laps){
    totalLap2 += parseInt(lap.replace('km',''))
}
console.log({totalLap2})










const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
// laps.push(newLap)
// laps.push(newLap2)
laps.push(newLap,newLap2)
console.log(laps)



//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)
