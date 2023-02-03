const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a,b){
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
  
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);