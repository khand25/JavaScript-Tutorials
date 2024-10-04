
/**
 * DOM = Document Object Model
 *  Object{} that repreesnts the page you see in the web browser
 *  and provides your with an API to interact with it.
 *  Web browser constructs the DOM when it loads an HTML document, and strcutures all the
 *  elements in a tree-like reperesentation. Javascript can access the DOM to dynamically
 *  change the content, structure, and style of a web page.
 */

// Basically DOM refers to the document object referece variable
// that lets you refer to pieces, tags, elements, properties, etc.
// of the connected html document as if they were objects in
// the memory address from the doucment object.

// We can modify the CSS property of the document's body
// by changing the background color to black
//document.body.style.backgroundColor = "hsl(0,0%,15%)";

const username = "Bro Code";
// grab the memory address of the DOMTutotrialHTML file's
// h1 element with the id of "welcome-msg" and have
// welcomeMSG be a referce variable to this memory address
const welcomeMsg = document.getElementById("welcome-msg");

// change the content of the h1 element to Bro code

 //welcomeMsg.textContent = username;


 // Let's try an example excersise by selecting a class
 // of elements from the html object and change one of the
 // children's content using innerHTML or text content
 // property

 // grab the only button node from the html document and have clickMeBtn be a reference varaible to its memory address 
 const clickMeBtn = document.getElementById("btn");



 // Now if when someone clicks on the only button in the html document, run the arrow function provided. The arrow function will
 // grab the list of memory addresses of elements with the class of 'master2' from the html document and have master varaible
 // essentially be an array referce to this array. Then, using array notation, grab the third memeory address or third element
 // with the class name of "master2" and change it's text content from 'I want a job' to 'I need a job' all whenever someone clicks
 // the button
 clickMeBtn.addEventListener('click', () => {
    let master = document.getElementsByClassName("master2");
    master[2].innerHTML = 'I need a job!';
 });

 
// Let's grab a list of all paragraph elements!

const tagBtn = document.getElementById("getTagNameBTN");

tagBtn.addEventListener('click', () => {
   // Grab all elements from the entire html document that
   // are paragraph elements and store it in an array.
   const listP = document.getElementsByTagName('p');
   // grab the 5th paragraph element and change its text to
   // Modified Sublime Text
   listP[4].innerHTML = 'Modified Sublime Text!';
   // code below does the same thing but rather uses
   // the unqiue div tag id to change it's child elements.

   /*const divTag = document.getElementById('getTagName');
    let grabbedElement= divTag.getElementsByTagName('p');
    grabbedElement[2].innerHTML = 'Modified Sublime Text!'; */
});

// We can accomplish the same things as get element by ids
// using query select. Query select will only grab the first associated
// element from the parameter.

let element = document.querySelector('p');
// prints out the first parahgraph elements and its content
// using devloper tools
console.log(element);

// grab all of the elements in the connected html file that
//are part of the class of master2 and sotre it in an array like
// strucutre where element will reference it in memory
element = document.querySelectorAll(".master2");
console.log(element[1]);

// grab the element from the html file with the id of getTagName
// using querySelector
element = document.querySelector("#getTagName");
console.log(element);

/**
* NOTE:
* Document, Nav, Div, and Section elements, we can use functions
* such getElementByID, getClassNameBy, getTagNameBy, querySelect
* querySelectAll(). 
* Other hhml elements are not capable of containing other elements
* within them so we cannot use these functions on them.
 */

let newElement = document.createElement('p');
newElement.innerHTML = 'This is a test to see if branches in Github work as I expect them to!!';
let parentDiv = document.querySelector('#getTagName');
parentDiv.append(newElement);

