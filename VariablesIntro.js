// variable = A container that stores a value.
// Behaves as if it were the value it contains

// 1. declaration: let x;
// 2. assignment: x = 100;

// created a varaible called x using the let keyword
let x;
x = 100;
console.log(x);

// We can also do declaration and assingment of variable in one
// line

let y = 123;
console.log("Value of y is: "+y);

let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(gpa);

// format Strings or template literals, can be used in JS by using `` for quotes and
// ${varaible} for actual varaible values

// typeof statement can be used to check the datatype of
// the varaible enclosed in parenthesis
// Remember number is a datatype in JS that includes both int
// and double values from Java
console.log(typeof(gpa));
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your gpa is: ${gpa}.`);

// Strings
let firstName = "Danyal Khan";
let favoriteFood = "Burgers"
console.log(typeof(firstName));
console.log(`Your name is: ${firstName}`);
console.log(`Your like: ${favoriteFood}`);

//Boolean varaibles.
// declared a varaible called online that is a boolean variable
let online = true;
console.log(typeof(online));

let fullName = "Danyal Khan";
age = 22;
let isStudent = false;

// Code below overrides all p1, p2, and p3 id's of elements from
// linked html file with text content on RHS side of varaibles

//
try {
 document.getElementById("p1").textContent = `Your name is ${fullName}`;
} catch(ReferenceError) {
    //console.log("");

}
try {
    document.getElementById("p2").textContent = `Your age is ${age}`;
   } catch(ReferenceError) {
       //console.log("");
   }
try {
    document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
} catch(ReferenceError) {
    //console.log(""); 
}
 //document.getElementById("p2").textContent = `Your age is ${age}`;
 //document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

 /***
  * Bro Code video 2.
  */
// arithemtic operators = operands (values, variables, etc.)
// operators (+ - * / %)

// declared a varaible called students and assinged it the numerical
// value of 30
let students = 30;

//students = students +1;

// exponents in JS used by '**'
//students = students **2;

// mode operator in JS.
//students = students % 2;

// Examples of augmented assignment operators

//students +=1;
//students -= 1;
//students *= 2;
//students /= 2;
students **=2;

//Increment and decrement operator like Java below in JS
students++;
students--;
console.log(students);

/***
 *  Operator precendence or order of operations
 *      1. parenthesis()
 *      2. exponents
 *      3. multiplication & division & modulo
 *      4. addition & subtraction
 */




