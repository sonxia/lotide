const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(assertEqual) {
  return assertEqual.slice(1);
}

//compare the values of the returned tail arrays otherwise the tail function will always fail
const result = tail(["Yeo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //length of the result is 2
assertEqual(result[0], "Lighthouse"); //the item in position 0 is Lighthouse
