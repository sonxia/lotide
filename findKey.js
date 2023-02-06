const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => { //findKey function takes an object and a callback function
  for (let key in object) { //looping through the objects
    if(callback(object[key])) { //if the object returns a truthy value the first key will be logged to the console
      return key;
    }
  }
  return undefined //return undefined if the key does not exist
};

const sTARS = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

const getAkaleri = (key) => {
  if (key.stars === 3) {
    return key;
  }
};

const getBH = (key) => {
  if (key.stars === 1) {
    return key;
  }
};

assertEqual(findKey(sTARS, getAkaleri), "Akaleri")
assertEqual(findKey(sTARS, getBH), "Bluehill")
