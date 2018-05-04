const add = require('./addinator.js').add;

console.log(add(5, 7) === 12, 'add positive numbers');
console.log(add(-5, -7) === -12, 'add negative numbers');
console.log(add(5, -7) === -2,'add positive and negative numbers');