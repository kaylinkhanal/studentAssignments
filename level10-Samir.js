//Optional chaining :

const userDetails = {
   hari: {
    ielts: {
        '12/2/2020': 32
    }
   },
   shyam: {
    pte: {
        '12/2/2020':34
    }
   }
}

//Q1. log 32
console.log(userDetails.hari.ielts['12/2/2020'])

//Q2. optional chaining:
console.log(userDetails.shyam.ielts?.['12/12/2020'])