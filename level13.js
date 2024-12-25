const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']



//Q2. Expected output
//  {
// 'ram': 'thapa'
const [fname, lname] = name.split(' ');
const result = { [fname]: lname }; // Use dynamic key to create the object

console.log(result);
// }

const parts = name.split(' ');
const result = { [parts[0]]: parts[1] };
console.log(result);

//Q3. expected output: 
// {
    // username: 'Ram Thapa'
    console.log({username:'Ram Thapa'})
// },

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const [firstName, lastName] = name.split(' ');
const username = (`${capitalize(firstName)} ${capitalize(lastName)}`);
console.log({username});



// function to capitalize

const capitalizeWord = (str) => {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
    .join(' ');
};
const userObject = {username: capitalizeWord(name)};
console.log(userObject)