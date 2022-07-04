# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Smoopfrog/lotide`

**Require it:**

`const _ = require('@Smoopfrog/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that checks if two arrays are equals
* `assertEqual`: function that checks if two values are equals
* `assertObjectsEqual`: function that checks if two objects are equals
* `countLetters`: function that returns counts of each letter of a string
* `countOnly`: function that takes items and returns counts for a specific subset of those items
* `eqArrays`: function that checks if two arrays equal
* `eqObjects`: function that checks if two objects
* `findKey`: function that scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue`: function that searches for a key on an object where its value matches a given value
* `head`: function that returns the first element from the array
* `index`: list of all lotide functions in an object
* `letterPositions`: function that returns all the indices in the string where each character is found
* `map`: function that executes a function on each element of an array and returns a new array with the new values
* `middle`: function that returns the middle element(s) of an array
* `tail`: function that returns every element except the first element of the array
* `takeUntil`: function that returns a slice of the array with elements taken from the beginning
* `without`: function that removes elements from an array