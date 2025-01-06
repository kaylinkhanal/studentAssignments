const laps = ["10km", "12km", "13km"];

//Q1. expected output =
// {
//   totalLap: 35
// }

<<<<<<< HEAD
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
=======
console.log({
    totalLap: parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
})

const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
laps.push(newLap,newLap2)
console.log(laps)
//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)
>>>>>>> 1657f0bb4081084a5f467dd7c529685208d0b662
