const arr = [3,5,6,1, 'ram' ,false]

let sum = 0
// arr.forEach((item)=>{
//     if(item%2!==0){
//         sum= sum + item
//     }
   
 arr.forEach((item)=>{
    if(typeof item === 'number'){
    sum += item
    }
    
    
})
console.log(sum)

//q1. calulate the sum of Numbers
//q2. filter out non integers : expected output : [3,5,6,1]
let outputs=arr.filter((item)=>{
    if(typeof item === 'number'){
        return item
    }
})
console.log(outputs)
const outputss=outputs.map((item)=>{
    return item*5
})
console.log(outputss)
//q3. in the filtered result, multiply each number by 5 using .map



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


