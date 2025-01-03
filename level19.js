const arr = [3,5,6,1, 'ram' ,false]

<<<<<<< HEAD
=======
let sum = 0
const output = arr.forEach((item)=>{
    sum = sum + (parseInt(item) || 0)
})
console.log(sum)
>>>>>>> 21577654e34a7344ff870a450fdafd1a42136b1a

//q1. calulate the sum of Numbers
let sum =0
arr.forEach((item)=>{
if(typeof item ==='number')
sum+=item
})
console.log(sum)
//q2. filter out non integers : expected output : [3,5,6,1]
const filtered = arr.filter((item)=>{
<<<<<<< HEAD
    return parseInt(item)
=======
   return parseInt(item)
>>>>>>> 21577654e34a7344ff870a450fdafd1a42136b1a
})
console.log(filtered)
//q3. in the filtered result, multiply each number by 5 using .map
const mapped = filtered.map((item)=>{
<<<<<<< HEAD
    return item*5
})
console.log(mapped)
=======
    return item * 5
})
>>>>>>> 21577654e34a7344ff870a450fdafd1a42136b1a

console.log(mapped)


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


