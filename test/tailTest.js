const tail = require('../tail');
const assertEqual = require('../assertEqual');

//compare the values of the returned tail arrays otherwise the tail function will always fail
const result = tail(["Yeo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //length of the result is 2
assertEqual(result[0], "Lighthouse"); //the item in position 0 is Lighthouse