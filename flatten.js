const eqArrays = function(a,b){
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
  
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(element2) {
        newArray.push(element2);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]