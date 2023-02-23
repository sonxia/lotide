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

const takeUntil = (array, callback) => { //this part of the function takes a callback function and applies it to an array, arrow notation is used. takeUntil will take elements from the beginning of the array until the callback function reaches a truthy value

  const results = [];  //results will give an empty array if there is no array provided
  for (let item of array) { //looping through the array
    if (callback(item)) { //when the conditions in the callback function is true, the item will be returned in the results array
        return results
      } else {
        results.push(item)
      }
   }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const lessThanZero = (x) => {
  if (x < 0) {
    return x
  }
}

const beforeHollywood = (x) => {
  if (x === "Hollywood") {
    return x
  }
}

console.log(assertArraysEqual(takeUntil(data1, lessThanZero), [1, 2, 5, 7, 2]))
console.log(assertArraysEqual(takeUntil(data2, beforeHollywood), ["I've", "been", "to"]))

module.exports = takeUntil;

