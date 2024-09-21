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

// To delete the last element in the array, use the command,
// pop

let value = teams.pop();
console.log(value);

// retrieve the index of the specifc element in am array.
let index = teams.indexOf('Saints');
console.log(index);

//Array unpacking or destructing where team1,team2,and team3
// will be assined the values of team[0],team[1], and team[2]
// respectively
let [team1,team2,team3] = teams;
console.log(team2);

// for of is the primiary loop to iterate through arrays, strings, sets, and maps!

for(let i = 0; i < teams.length; i++) {
    console.log(teams[i]);
}

// equavalent to for each loop from java and python
// loop below will atuomatically iterate from index 0 to
// teams.length -1. On each iteration, teams[i] will be assinged to element varaible and it will be printed out to the screen
for(let element of teams) {
    console.log(element);
}

/**
 * Useful Array methods in Javascript!!!
 * 
 */

// forEach() = function used to iterate over the elements
// of an array and apply a specified function (callback) to each element

// array.forEach(callback)

/** The for each function will use a for loop to iterate through the current array calling object.
 * On each iteration of the array calling the forEach function,
 * the forEach function will pass in the current element in the array
 * , current array index, and the location of the array in memory to our function we
 * pass in as an arugment to the for each function. Using the result of provided
 * functions, it will replace the current array element value with the resultant value
 * before moving on to the next element. This will only happen if we specially
 * say to do array[index] = to some value in the function we pass in. Otherwise nothing will change inside of the calling array.
 *  Eseentially changing the inplace
 * calling array object and DOES NOT CREATE A NEW RESULT ARRAY.
 * The for each function will call the passed in function each iteration move on to the next element of the array.
 */

let numbers = [1,2,3,4,5];

numbers.forEach(double);
//numbers.forEach(display);

// array parameter refers to current array calling object!
// index refers to the current index of the ith element
function double(element,index,array) {
    array[index] = element * 2;
}
const display = function(element,index,array) {
    // on each iteration over the calling array element's,
    // just print out the current element to the screen
    console.log(element);
}

for (let element of numbers) {
    console.log(element);
}

numbers.forEach(display);


/**
 * Map function very similar to for each function for arrays. Only difference is that map functional parameters, should
 * return a value. That returned value, on each iteration of the current array calling object the map functions loops through,
 * will append the returned functional resutlant value as a new element to the NEWLY CREATED SEPERATE RESULTANT ARRAY. Essentailly
 * creating a new result array different from the original array.
 */



