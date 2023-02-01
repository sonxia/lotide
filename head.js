const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");