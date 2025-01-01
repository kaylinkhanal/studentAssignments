
const laps = ['10km', '12km', '13km']

//Q1. expected output = 
// {
//   totalLap: 35
// }

console.log({
<<<<<<< HEAD
    totalLap : parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
})

// using loop
const totalLap=
laps.map(lap=>parseInt(lap)).reduce((A,B)=>A+B);

const output = {totalLap};
console.log(output)


=======
    totalLap: parseInt(laps[0])+parseInt(laps[1])+parseInt(laps[2])
})

>>>>>>> 6df32027839b0df44ff930def5afffd7b1f8e92d
const newLap = '14km'
const newLap2 = '11km'
// Q2. console.log laps, expected output 
// ['10km', '12km', '13km', '14km','11km']
laps.push(newLap,newLap2)
console.log(laps)
<<<<<<< HEAD



//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop();
console.log(laps);
=======
//Q3. pop last lap from the array
//  console.log laps, expected output 
// ['10km', '12km', '13km', '14km']
laps.pop()
console.log(laps)
>>>>>>> 6df32027839b0df44ff930def5afffd7b1f8e92d
