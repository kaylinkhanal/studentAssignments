// STRING 

let password = 'hello@123'
// Q.1   find length of password

console.log(password.length);



//Q.2 check if password contains @, expected output is true
 
let result = password.includes('@');
console.log(result)
// console.log(password.includes('@'))

//  Q.3 replace  @ with - and console.log the output
let rplc = password.replace('@' , '$')
console.log(rplc);

console.log(password.replace('@', '-'))


// Q.4  [Hard]. consloe.log the reverse of the string 

console.log(password.split(''))

// Q.5 for the reversed string, only output 321 as a number
console.log(parseInt(password.split('').reverse().join('')))


let name = 'sushim chaudhary';
console.log(name.substring(3))