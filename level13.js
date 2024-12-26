const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
console.log(name.split(' ').reverse());


//Q2. Expected output
//  {
// 'ram': 'thapa'


const user = name.split(' ');
const result = {[user[0]]: user[1]};
console.log(result);

//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },


//---------------------------

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const [firstName, lastName] = name.split(' ');
const username = (`${capitalize(firstName)} ${capitalize(lastName)}`);
console.log(username)

// // function to capitalize

// const capitalizeWord = (str) => {
//     return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
//     .join(' ');
// };
// const userObject = {username: capitalizeWord(name)};
// console.log(userObject)
