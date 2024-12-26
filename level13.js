const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
const output = name.split(' ').reverse();
console.log(output)



//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
const A = name.split(' ');
const output1 = {[A[0]]: A[1]}
console.log(output1)


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
const output2 = name[0].toUpperCase()+name.slice(1,3)+ ' '+ name[4].toUpperCase()+name.slice(5)
const output3 = {username:output2}
console.log(output3)

