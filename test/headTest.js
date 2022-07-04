const head = require('../head');
const assertEqual = require('../assertEqual');

//Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");