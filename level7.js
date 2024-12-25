

// //  Array
let number = [1,2,3,4,5,6,7,8,9]

// // for loop
// for (let i = 0; i < number.length; i++){
//     console.log(number[i])
// }

for (let num of number ){
    console.log(num)
}
// /// average number-------------

let marks = [22,33,44,55,66,77]
let sum = 0;
for (let val of marks){
    sum += val;
} console.log(sum);

let avg = (sum / marks.length);
console.log(avg)


// // offer -----

let prices =[200, 300, 400, 500];
let i = 0;
for (let price of prices){
    let offer = price /10;
    prices[i] = prices[i] - offer;
    console.log(prices[i]);
    i++;
}


// let foodItems = ['apple', 'banana', 'litchi', 'grapes']
// foodItems.push('orange');
// console.log(foodItems)
// let deletedItem = foodItems.pop();
// console.log(deletedItem);
// console.log("deleted", deletedItem)
// foodItems.pop()
// console.log(foodItems)
// console.log(foodItems.toString())



// // concat method 

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
let fullnum = num1. concat(num2);
console.log(fullnum);


// // unsift method (push)

// let fullnum = num1.unshift(5);
// console.log(fullnum)

