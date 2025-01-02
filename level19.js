const arr = [3,5,6,1, 'ram' ,false]


//q1. calulate the sum of Numbers

const num = arr.filter((item)=>{
    if(Number.isInteger(item)){
        return item
    }
})
let sumNum = 0
const sum = num.forEach((item)=>{
    sumNum +=item
})
console.log(sumNum)
//q2. filter out non integers : expected output : [3,5,6,1]
console.log(num)
//q3. in the filtered result, multiply each number by 5 using .map
const mult = num.map((item)=>{
    return item*5
})
console.log(mult)



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


