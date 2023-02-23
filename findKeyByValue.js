const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue  = (object,value) => {
  for (const objectKey in object) {
    if (object[objectKey] === value) {
      return objectKey;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  psychological: "Hannibal",
  action: "Moon Knight",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Hannibal"), "psychological")
assertEqual(findKeyByValue(bestTVShowsByGenre, "Moon Knight"), "action")
assertEqual(findKeyByValue(bestTVShowsByGenre, "Lucifer", undefined))

module.exports = findKeyByValue;
