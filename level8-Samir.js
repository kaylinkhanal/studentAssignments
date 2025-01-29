//null and undefined vs not defined
// let a 


// if(a || a==0) console.log("something is there")
// else console.log("nothing")


// console.log(-0+1)
// console.log(1-0)



// two categories of DATA TYPE:


// 1. primitive data type: String, Number, Boolean, null, undefined, symbol, BigInt
// 2. non primitive data type: Object



//Object: 

// store item in key value pair
// syntax: {
    // key: value,
    //key: value,
    //key:value
// }
//


const myInfo  = {
    name: 'kaylin',
    address: 'gorkha',
    phoneNumber: 9843401457,
    age:90
}

//Q1. get the output 'kaylin'
console.log(myInfo.name)
//Q2. get the output 'Kaylin lives in Gorkha'  //note: check case
console.log(myInfo.name[0].toUpperCase() +myInfo.name.slice(1) + ' lives in ' + myInfo.address[0].toUpperCase()+myInfo.address.slice(1) )
//Q3. Decrease the age by 30 and print the output

//expected ouput:
//write some code
myInfo.address='raniban'
myInfo.age = myInfo.age - 30

//expected ouput is:
// {
//     name: 'kaylin',
//     address: 'gorkha',
//     phoneNumber: 9843401457,
//     age:60
// }

//Q4 expected output is :
// {name: 'kaylin', primaryAddress: 'gorkha'}
delete myInfo.age
delete myInfo.phoneNumber
console.log(myInfo)
//Q5. expected output is ['name','address','phoneNumber', 'age']
console.log(Object.keys(myInfo))
//Q6. expected output is ['kaylin','gorkha','9843401457', 90]
console.log(Object.values(myInfo))






