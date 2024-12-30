const details = {
  user: {
    name: "ram khanal",
  },
  subjects: ["math", "science"],
};

const subjects = {
  math: 35,
  science: 36,
  computer: 56,
};

//Expected output:
// {
//     user: {
//         name: 'ram khanal'
//     },
//     subjects: [35,36]
// }

let nestedObj = {
  user: details.user.name,
  subjects: [subjects.math, subjects.science],
};

console.log(nestedObj);
