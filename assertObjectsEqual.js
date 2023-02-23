const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false; 
    }
    for (let a of Object.keys(object1)) {
      if (Array.isArray(object1[a]) && Array.isArray(object2[a])) { 
        return eqArrays(object1[a], object2[a]) 
      }
      if (object1[a] !== object2[a]) {
        return false;
      }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let returnResult = eqObjects(object1, object2);//passes the object into the eqObjects function to see if the result is true or false
  if (returnResult) {
    return console.log(`🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`); //if true assertion passes and pass message is printed
  } else {
    return console.log(`🔥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`); //if false assertion fails and fail message is printed 
  }
};


object1 = {x: 1, y: 3}
object2 = {x: 2, y: 4}
object3 = {y: 4, x: 2}

console.log(assertObjectsEqual(object1, object2))
assertObjectsEqual(object2, object3)

module.exports = assertObjectsEqual;