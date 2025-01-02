const arr = [3,5,6,1]
let sum = 0
arr.forEach((item)=>{
    if (item % 2 !== 0){
        sum= sum + item
    }
})
console.log(sum)

// calculate sum of odd number


// HW
// research: map vs filter vs forEach

let x = arr.map((item) => {
    if (item>4) return item
})
console.log(x)