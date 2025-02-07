let a = 20
//add 100 to a and assign it to constant
const b = a + 100


const faceConfigId = {
    'Q': 11,
    'K': 12,
    'J': 10,
    'A': 13
}

const targetNumber = 13

for (const key in faceConfigId) {
    if (faceConfigId[key] === targetNumber) {
        console.log(key)
  
}
}