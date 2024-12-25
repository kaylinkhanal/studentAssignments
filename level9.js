// null and undifined vs not defined

// let a = 0;
// if(a || a==0) {
//     console.log('something is there')
// } else {console.log('nothing')}


// console.log(0/0 ==Infinity )     //true


// object :---------------


const myInfo ={
    name:'sushim',
    address:'Dang',
    phoneNumber: 980987654,
    age: 90
};


//Q.1
console.log(myInfo.name);
console.log(myInfo['name'])

//Q.2
console.log(`${myInfo.name[0].toUpperCase()+ myInfo.name.slice(1)} lives in ${myInfo.address[0].toUpperCase()+ myInfo.address.slice(1)}`)
// //Q3.
// myInfo.age = myInfo.age - 30;
// console.log(myInfo)


// // Q.4 
// delete myInfo.name;
// delete myInfo.age;
// console.log(myInfo)

// // Q5.

console.log(Object.keys(myInfo))


// // Q.6
console.log(Object.values(myInfo))




 



