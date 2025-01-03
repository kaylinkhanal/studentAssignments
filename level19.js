const arr = [3, 5, 6, 1, "ram", false];

let sum = 0;
const output = arr.map((item) => {
  //sum = sum + item
});
console.log(sum);

//q1. calulate the sum of Numbers
arr.filter((item) => {
  if (item > 0) {
    return (sum = sum + item);
  }
});

console.log(sum);

arr.map((item) => {
  if (item === Number) {
    return (sum = sum + item);
  }
});

console.log(sum);

//q2. filter out non integers : expected output : [3,5,6,1]

let output3 = arr.filter((item) => {
  if (item > 0) {
    return item;
  }
});

console.log(output3);

//q3. in the filtered result, multiply each number by 5 using .map
const mapped = filtered.map((item)=>{
    return item * 5
})

let output4 = output3.map((item) => {
  return item * 5;
});

console.log(output4);

// MAP                   vs                   FOREACH
// -> returns new array                    -> doesn't return new array, but can modify existing array
// ->                                      -> faster
// -> chain new functions                  -> not chainable
//-> usecase: modify old array             ->usecase: just calcualte sth
//-> returned array length is always same

//FILTER
// -> returns new array
// -> can remove items from array
// ->
