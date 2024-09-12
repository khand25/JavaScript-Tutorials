// Print statement in Javascript that print out Hello World to the console
// My first Javascript file!!!
console.log("Hello World");

/***
 * Test a few lines of code first, and see if it works before moving to another piece of code.
 */

// JS is similar to Python where there is not a explict main method but, rather we write our code directly from top to bottom and
// it will be exectuded sequntially
console.log("Another print statement!");

// Primitve types in JS for JS varaibles
// Number, String, boolean, null, undefined, Symbol

/***
 * JS also has objects types that include, arrays, sets, and maps. Functions and classes are also objects in JavaScript
 */

/**
 * To declare a variable in JacaScript, use either the "var", "const", or "let" keywords.
 *
 */

let foo = 0; // declares a varaible called 'foo' storing the value of 0.

/**
 * Constants are declared with 'const'. Varaibles declared with 'let' have block scope
 */

/**
 * Varaibles declared with the var keywrod are scoped to the body of the containg function no matter how deeply nested. If 'var' is used
 * outside a function body.
 * ESSENTIALLY USE 'let' FOR VARAIBLES AS SAME SCOPING APPLIES TO JAVA LIKE JS FOR VARAIBLES
 */

/**
 * JS Interpeter performs automatic garbage collection for memory mangamnet.
 * supports an object-oriented programming style
 */

foo = 4;
//dynamically typed are varaibles in JS like Python:

foo = "Dynamically typed"

console.log(foo);

/**
 * String are imutable in JS. Just like in Java and Python, we can access indivdual characters in a String by using index
 * paired with [] brackets
 * 
 */
console.log(foo[2]);

/**
 * Simlar to Python, there are f Strings in JS
 * 
 */

console.log("10" == 10); // Converts String 10 into numeric 10 to perform == operation
console.log("10" === 10); // Stricly checks based on types as well and doesn't perfrom automatic conversion

let a = 10;
// console.log(statement) is the print statemnt in JS
console.log(a);

a = "Hi guys!"
console.log(a);
// typeof function can be used to check the datatypes of varaibles
console.log(typeof(a));

// Example of using f String in JS. Notice the `` at the beginning of the String and ${a} noting the varaible to syb
console.log(`Hi guys using ${a}`);

/**
 * 
 * Can't execute code below as we are trying to assign a new value to an laready predefined 'const' varaible
 
const constantVariable = 8;
constantVariable = 9; 
*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

/**
 * JS supports:
 * if, if/else conditionals
 * switch statements
 * condtional (ternary) operator
 * for, while and do.. while loops
 * try.. catch
 * arrays (similar to Lists from Pythons)
 * functions/methods
 * iterating an array using for ... of
 */

/**
 * Declared an array in JS that references a place in memory that contains the values of 2017,2018,2019,and 2020 at indices
 * 0 - 3 (inclusively) 
 */
let years = [2017,2018,2019,2020];

/**
 * For hw, create a seperate JS file. Make sure to go topic by topic, from the JS slides from web programming and add key
 * concepts, practice programs, and terminlgy covered in the slides to either this file or another starting from the benggingin.
 * If stuck, use Youtube, the internent, and chat gbt for help
 * 
 */


/**
 * for loop is very similar to that in Java.
 */
for (let i = 0; i < years.length; i++) {
    console.log("At element "+i + " we have the element: "+years[i]);
}

console.log("Use Bro Code to learn more about JS!");
