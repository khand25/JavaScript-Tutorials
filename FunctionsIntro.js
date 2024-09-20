/*** 
 * Functions Intro!!!
***/

/**
 * Functions are a type of OBJECT in memory where they are essentially a block of code defined
 * once but can be excecuted and called multiple times. They are useful for easier debugging,
 * alogrithm effeicny, and organization of code. 
 * Specifcally JS does not require types for function parameters or return types. 
 * Return statement is optional. We can return a primitive data type varaible or value,
 * object memory address or an object referecne varaible, or undefined (nothing)
 */

/**
 * PS, we can define inner function or nested functions within a body of a function. They can use local and global varaibles
 * of the genral file and of the outer function. They must be called within the outer function to be executed and cannot
 * be called, unless returned specifcally, outside of the scope of the outer function
 */
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns the average of x and y numerical values
 */
function average(x,y) {
    function hi() {
        console.log('Hi inner');
        return undefined;
    }
    hi();
    return (x + y)/2;
}

/**
 * Here we are calling the average function above with passing in 7 and 8 numerical values for x and y parametes respectively.
 * Note we are storeing the return value of the average function in the result varaible. We can print out the return value, store
 * it in a similar type varaible, or use it in a computation if the return value is primitive. For returned memory address, we can
 * assign another referece varaible of the same type to it or call the functions, attributes, or elements inside of the memory address.
 */
let result = average(7,8);
console.log(result);

/**
 * Functions are types of objects in memory similar to Python.
 * So we can pass function names or function definations are parameters
 * for other functions, return them, or assign alias varaibles
 * names to functions to refer to them in memory and have another
 * name to call saifd functions.
 */

/**
 * See how we defined a alias called square, which is a const
 * so we CANNOT assign this square varaible to something else
 * , to the function we define on the LHS.
 * @param {*} x refers to the numerical argument we wish to square
 * @returns the squared result
 */
const square = function(x) {
    return x*x;
}

console.log(square(2));

//Arrow functions are essentially similar to lambda statements
// from Python. They don't have an explict name, but can have
// an alias to them in memory that refers to their function
// definations and can be used to call them.

const squareOfX = (x) => {
    console.log(`I am an arrow function to take the square of ${x}`);
    return x*x;
};
console.log(squareOfX(32));

/**
 * JS let's use define higher order functions or functions
 * that can take in other functions are parameters, or return functions
 */

/**
 * 
 * @param {*} funct can be assigned, as an alias, to any function that takes in one argument
 *  and should return a value
 * @param {*} data a parameter that will be passed into the funct assinged function 
 * @returns the value of the funct alis to another functions value
 */
const highOrderFunct = function(funct,data) {
    return funct(data);
}

function isEven(value) {
    if (value %2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(highOrderFunct(isEven,8));