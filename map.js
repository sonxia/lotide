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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const getFirstIndex = (getindex) => {
  return getindex[0];
}

const getValue = (value)  =>{
  return value;
}

const getLength = (length) =>{
  return length;
}

console.log(assertArraysEqual(map(words, getFirstIndex), ['g', 'c', 't', 'm', 't']));

console.log(assertArraysEqual(map(words, getValue), ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(map(["one", "two"], getLength), words));

