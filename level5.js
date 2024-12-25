// // if statement



let a = 10;
if (a % 5 === 0){
   console.log('divided')
} else {
   console.log('not divided')
}

// // ternary operator
a % 5 === 0 ? console.log('divisible')
: console.log('not divisible')


// // Q1. if length of name is greater than 5  console.log("short name is only vaild") // else "you are registered" ?

 const name = "ram thapa"; 
 if (name.length > 5){
   console.log('short name is only valid')
 } else {
   console.log('you are registered')
 }

 // ternary op--------

 const name1 = 'sushim';
 name1.length >= 6 ? console.log('voted')
 : console.log('not voted')



// // Q2. if the starting char is @, and last letter is 3(number),
//     // console.log("password is strong")
//     // else print ("password is weak")

// const password = 'sushim@12345#'
// if (password[4]==='i' && password[password.length - 4] === '3'){
//    console.log('password is strong');
// } else {
//    console.log('week');
// }
 

// ternary op ----------------

//  password[2]==='s' && password[password.length - 2]==='5' ? console.log('strong')
// : console.log('week')

// Q3. if b greater or equals to 0.8, console.log("you are lucky"), 
// b is grater or equals 0.3 and less than 0.8 conslole.log("Good day")
// if b is less than 0.3 you are unlucky

let b = Math.random()
console.log(b);
if (b >= 0.8){
   console.log('you are lucky')
} else if (b >= 0.3 && b < 0.8){
   console.log('good day')
} else{
   console.log('you are unlucky')
}
// // ternary op ------------

b >= 0.8 ? console.log('lucky')
: b >= 0.3 && b < 0.8 ? console.log('good day')
: console.log('unlucky')


/// odd or even number--------------------
let number = 290
if (number % 10){
   console.log('odd number')
} else {
   console.log('even number ')
}

// Compare two numbers and print the largest.

let x = 10;
let y = 5;
if(x > y){
   console.log('largest number')
} else {
   console.log('smallest number')
}



// Write a program that checks whether a number is positive, negative, or zero.

 let n = 5;
 if(n > 0){
   console.log('positive')
 } else if (n < 0){
   console.log('negative')
 } else {
   console.log('zero')
 }


// Write a program to determine the grade of a student based on marks.

// let marks = 85; 
// if (marks >= 90){
//     console.log("A")
// } else if (marks >= 80 ){
//     console.log("B")
// } else if ( marks >= 70){
//     console.log("C")
// } else if (marks >= 60 ){
//     console.log("D")
// } else {
//     console.log("F")
// }


//Write a program to check if a given year is a leap year or not.

// let year = 2024;
// if (year % 4 === 0) {
//     console.log(year + "is a leap year")
// } else if (year % 100 === 0 ){
//     console.log(year+ "not leap year")
// } else if (year % 400=== 0){
//     console.log(year+ "leap year")
// } else {
//     console.log(year + "not leap year")
// }

//Check if a person is eligible to vote. (Age >= 18)

// let age = 16;
// if (age >= 18) {
//     console.log(" eligible to vote");
// } else {
//     console.log("not eligible to")
// } 

// //Write a program that checks whether a number is divisible by both 3 and 5.

//  let number = 15;
//  if(15 % 3) {
//     console.log("divisible by 3")
//  } else if(15 % 5){
//     console.log("divisible by 5")
//  } else {
//     console.log("both 3 and 5 divisible")
//  }


// // Create a simple program where you check a username and password:

 let username = 'admin';
 let password = '1234';
 let inputUsername = 'admin';
 let inputPassword = '1234'
 if(inputUsername === username && inputPassword === password){
   console.log('login succesful')
 } else {
   console.log('error: invalid username aor password')
 }

//  let a = 15;
//  let b = 20;
//  let c = 10;

//  if(a > b && a > c){
//     console.log("largest number is "+ a)
//   } else if(b > a && b > c){
//     console.log("largest number is" +b)
//   } else {
//     console.log("largest number is" +c)
//   }
 

//  //  Write a program to print the behavior of a traffic light system based on input.

//  let signal = "green" 
//  if (signal === "red"){
//     console.log("stop")
//  } else if (signal === "yellow"){
//     console.log("wait")
//  } else if (signal === "green"){
//     console.log("Go")
//  } else {
//     console.log("Invalid signal")
//  }

// // Write a program to determine if a character is a vowel (a, e, i, o, u)

let char = 'b'
if (char==='a' || char=== 'e' || char ==='i' || char ==='o' || char ==='u'){
   console.log(`${char} is vowel letter`)
} else {
   console.log(`${char} is conconent letter`)
}

//  // Write a program to check if three given sides can form a valid triangle.

//  let x = 3 , y = 4, z = 5;
//  if (x + y > z && x + z > y && y + z > x) {
//     console.log("the side from a valid triangle")
//  } else {
//     console.log("the sides do not from a valid triangle")
//  }
// //Write a program to calculate the electricity bill based on the following pricing structure:

// // Up to 100 units → 5/unit
// // 101 to 200 units → 7/unit
// // Above 200 units → 10/unit

//  let units = 250; 
// let bill = 0;

// // Calculate the bill based on the number of units
// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = 100 * 5 + (units - 100) * 7;
// } else {
//     bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
// }

// console.log("The total electricity bill is: Rs" + bill)

let unit = 1000;
let bill = 0;
if (unit <= 100){
   bill = unit + 5;
} else if (unit <= 200){
   bill = 100 * 5 +(unit - 100) * 7; 
}else {
   bill = 100 * 5 + 100 * 7+ (unit - 200) * 10;
} console.log(bill)