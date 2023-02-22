const assertEqual = require('./assertEqual');

// TEST CODE
/*console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Strawberry", "Strawberry"));
console.log(assertEqual("Strawberry", "Banana"));
console.log(assertEqual(5, 5));
console.log(assertEqual(4, 5));*/ 

function head (assertEqual){
  return assertEqual[0];
}

module.exports = head;