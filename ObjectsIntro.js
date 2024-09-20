// Objects intro in Javascript!!!!

// Created a person object with the attributes of person.firstName = 'Danyal'
// and person.lastName = 'Khan'
// See how the notation is similar to a set of key value pairs from Python
let person = {
    firstName: 'Danyal',
    lastName: 'Khan',
    age: 23,
    salary: 10000,
    // defines a function called: increaseSalry, that literally
    // increases the slary instance varaible of the calling
    // object by 10%

    
    increaseSalary: function() {
        this.salary = this.salary * 1.10;
    }
};

// Constrcutor for the Person object's that will be used
// to create any newly created Person objects upon using
// the new keyword. it will be called once be creation of the object itself
function Person(firstName,lastName,age,salary) {
    this.firstName =  firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
}
console.log(person.firstName);
// See we can add additional proeprtys to object's unique
// memory address as much as we want. But this will only be refelected for the calling object and not other objects that have similar
// attributes
let danyalsAge = person.age = 23;

console.log(danyalsAge);
// Call the increaseSalary function from any person objects
person.increaseSalary();
console.log(person.salary);

let boy = new Person("Sal", "Lamarca", 45, -90000);

//boy.increaseSalary();

console.log(boy.salary);



// ***Use object-oriented programming in JS by Programming with Mosh

// Using an object literal syntax.
const circle = {
    radius: 1,
    // location is an inner object that is embeeded in any
    // circle type object 
    location: {
        x:1,
        y:1
    },
    // draw is a method from any circle object
    draw: function() {
        console.log('draw');
    }
};

// call the draw function from an example circle object
circle.draw();



// Use a factory function. That returns a newly created object
// that has the property of radius, and draw methods.
function createCircle(radius) {
    // return an object like a circle
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(15);
circle1.draw();
console.log(circle1.radius);

// We can also create a newly created object by using a constructor
// function!!!

//Constructor for Circle objects. Remember this refers to
// the calling object in JS. When refering to this, we can
// refer to its attrbitues and functions that that the calling
// object will receive uopn being created from using the constructor.

function Circle(radius) {
    // radius and draws are both members
    // from Circle objects class.
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Below code will create a newly empty object refercening
// some random memory address. Then it will make anotherCicle
// constant varaible as a referece to this memory address.
// And then anotherCircle, will essnetially be a 
// new referecne object with attributes of radius, and draw
// function
const anotherCircle = new Circle(30);

console.log(anotherCircle.radius);
// We now use anotherCricle as essentially as an object form
// the 'Circle class'. And change attributes as needed.
anotherCircle.radius = 17;
console.log(anotherCircle.radius);
anotherCircle.draw();
// dynamically added an new property to the anotherCircle called area. NOTE THAT THIS NEW PROPERTY OF 'area' WILL NOT BE
// ADDED TO another use of the instance to the Cricle class when using the constructor again.
anotherCircle.area = 2* 3.14 * anotherCircle.radius;
console.log(anotherCircle.area);

let circle2 = new Circle(65);
// Primitive data types in JS:
/**
 *Primitive data types in JS:
    * Number, String, Boolean, Symbol, undefined, null
* Reference datat types in JS:
    * Objects, Arrays, Functions 
 */

// Now we can create indivdual objects in JS, that references
// a unique memory address by using object's literals.
// Note if we assign other object reference varaibles
// to the object literal's, then they are 
// essentially shallow copies of each other.
// so if we want to create deep copy objects, use the construcotr method.

const animal = {
    name: 'Cat',
    gender: 'Male',
    color: 'Blue',
    hunt: function() {
        let text = `The ${this.color} ${this.gender} ${this.name} is hunting!`
        return text;
    }
};

// call the hunt function part of all 
console.log(animal.hunt());
//lets create another object as a shallow reference or copy to the
// animal object.

let dog = animal;
dog.name = 'Dog';
dog.gender = 'female';
dog.color = 'Black';
console.log(dog.hunt());
console.log(animal.hunt());

// We can add properties to objects after declaration

animal.age = 17;
// Note that the memory address, that is shared by both animal and dog reference varaibles, will now contain a new property called
// age, and will share the same unique instance varaible copy of age as each other.
console.log(dog.age);

// we can also dynamically delete properties by using the delete keyword
delete dog.age;

// We can use the 'in' keyword to check if a property exists in an
// object.
if ("name" in animal) {
    console.log(true);
}
// Below code destrcuted or unpacks a dog object. One by one 
//sequatinally all the properties indivdually are assinged
// to the varaibles in the curly braces
let {name,gender, ...color} = dog;
console.log(color);

// For loops used to extract the 'KEYS' from objects.
// Note thatt is a key and not the acutal value. If we want to display the associated value
// of the key's, use the syntax of object[element]
for (let element in animal) {
    console.log(animal[element]);
}