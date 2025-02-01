const arr = [3,5,6,1, 'ram' ,false]

let sum = 0
const output = arr.forEach((item)=>{
    sum = sum + (parseInt(item) || 0)
})
console.log(sum)

//q1. calulate the sum of Numbers
//q2. filter out non integers : expected output : [3,5,6,1]
let output1=arr.filter((item)=>{
    if(typeof item === 'number'){
        return item
    }
})
console.log(output1)

const output2=output1.map((item)=>{
    return item*5
})
console.log(output2)



//q3. in the filtered result, multiply each number by 5 using .map
const mapped = filtered.map((item)=>{
    return item * 5
})
const arr2 = [3,5,6,1, 'ramcha', false]
const teacher = arr2.filter((item)=>{
    if (typeof item === 'number'){
        return item
    }
    
}). map((item)=>{
    return item*5
})
console.log(teacher)


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


