const name = 'ram thapa'

//Q1. Expected output:
// ['thapa','ram']
x = name.split(' ').reverse()
console.log(x)


//Q2. Expected output
//  {
// 'ram': 'thapa'
// }
name_copy = {}
name_copy[x[1]] = x[0]
console.log(name_copy)


//Q3. expected output: 
// {
    // username: 'Ram Thapa'
// },
name_copy2 = {}
name_copy2['username'] = name
console.log(name_copy2)