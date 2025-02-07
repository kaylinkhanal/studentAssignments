
const faceConfigId = {
    Q: 11,
    k: 12,
    J: 10,
    A: 13,
};

const number = 13;

const foundKey = Object.keys(faceConfigId).find(key => faceConfigId[key] === number);

console.log(foundKey)