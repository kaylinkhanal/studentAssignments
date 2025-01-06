// Eg.1
let arr = [1,2,3,4,5]

const factorial = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(factorial)


// Eg.2
let multi_dim = [[1,2], [2,3], [3,4]]

const single_dim = multi_dim.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);
console.log(single_dim)