
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

<<<<<<< HEAD
const lap= parseInt(laps);
const totalLap =laps[0] + laps[1] + laps[2];
console.log(totalLap);
=======
console.log({
    totalLap: parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
})
>>>>>>> 943d36c96131191431a30e825ee2092f978cda60

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
<<<<<<< HEAD

const pushArray = laps.push(newLap,newLap2)
console.log(pushArray);

// Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']

const popped =laps.pop();
console.log(popped);
=======
laps.push(newLap,newLap2)
console.log(laps)
//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)
>>>>>>> 943d36c96131191431a30e825ee2092f978cda60
