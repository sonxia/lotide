# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sonxia_/lotide`

**Require it:**

`const _ = require('@sonxia_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: will return the first item in an array
* `tail`: willr return all items in an array excluding the head
* `assertArraysEqual`: asserts whether or not two arrays are equal
* `assertEqual`: asserts whether two values are equal without converting them to the same data type (primitive values)
* `assertObjectsEqual`:asserts whether or not two objects are equal
* `countLetters`: will return an object with key value pairs that correspond with each unique character in a string and the number of times it accurs respectively 
* `countOnly`: when given an object and a list of values it will return the number of times each value occurs in the list
* `eqArrays`: determines whether two arrays are the same 
* `eqObjects`: determines whether two objects are the same
* `findKey`: when given an object and a callback, the first key associated with the callback will be returned
* `findKeyByValue`: when given an object and a value, will return the key associated with that value
* `flatten`: will return a single array with the same values when given a nested array 
* `letterPositions`:returns an object in which the keys are the letters of the string and the value is the index position that the letter can be found
* `map`: takes and array and a callback and returns a new array based on the definition of the callback
* `middle`: will find the middle value (if odd amountof numbers)/values(if even amount of numbers) of an array and return it as an array
* `takeUntil`: returns an array containing the items from the beginning as defined in the callback
* `without`: given an array and a list of things to exclude from the list, it will return a new array that does not contain the items to be excluded