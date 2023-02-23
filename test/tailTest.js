const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const { assert } = require('chai');

describe("#tail", () => {
  const array = ["Yeo", "Lighthouse", "Labs"];
  it ("returns 2 for result length", () => {
    assert.strictEqual(tail(array.length), 2);
  });
  it ("returns Lighthouse at index 0", () => {
    assert.deepEqual(tail(array[0]), "Lighthouse")
  });
});





//compare the values of the returned tail arrays otherwise the tail function will always fail
// const result = tail(["Yeo", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); //length of the result is 2
// assertEqual(result[0], "Lighthouse"); //the item in position 0 is Lighthouse