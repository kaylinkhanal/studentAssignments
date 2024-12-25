// logical operator ( && , ||)

// Q.1 check if a is greater than b or b is grater than c, output should be false

var a = 10
var b = 12
var c = 13
console.log(a > b || b > c);
debugger;

// Q.2 check if c is greatest between the three, output should be true
console.log(c > b && c > a);

// Q.3 b should be positive but less than 15, and c should be odd number
console.log(b > 0 && b < 15 && c % 2!= 0)


