// Arrays intro and their methods!!!

/**
 * Arrays are a MIXED data structure in JS that can store a collection of variables or
 * literal values. They can hold values of mixed types, and don't have to be homogenous
 * data structure like that of Java. Very similar to List data structure from Python.
 * The size of an array is dynamic and can be resized when needed.
 * We don't need to specify the size of the array outfront.
 * Arrays can be constructed with either the 'new' keyword with the Array() constructor
 * , or with array literal notation - [].
 * length returns the total number elements in the array
 */

// creates an empty scores array in memory where the scores is an reference varaible
// on the global data section of the program, that references a memory address on the heap
// that contains now elements so far 
let scores = new Array();

// another way to do the same thing as above.
scores = [];

// we can create an array with elements of 5,6,7,9,10, and "Hello" elements.
let exampleArray = new Array(5,6,7,9,10,"Hello");
// Access the sixth element of the array below.
console.log(exampleArray[5]);
// display the total number of elements in the exampleArray
console.log(exampleArray.length);

let teams = ['Falcons', 'Saints', 'Panthers'];
// the push functions adds a specifed value to the end as the last element, of the array.
// Similar to the append function of lists

teams.push('Cheifs');
console.log(teams[3]);

