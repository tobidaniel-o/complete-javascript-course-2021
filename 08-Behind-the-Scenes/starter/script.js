'use strict';

// Javascript is a high-level, object-oriented, multi-paradigm programming language

// High-level - Developer does not have to worry, everything happens automatically.

// Garbage-collection - Cleaning the memory so we don't have to.

// Interpreted or just-in-time compiled - Write human readable code that will be compiled to machine codes - 0s and 1s

// Multi-paradigm - An approach and mindset of structuring code, which will direct your coding style and technique.
// Procedural programming
// Object-oriented programming
// Functional programming

// Prototype-based object-oriented - Almost everything in JS is an Object

// First-class functions - Functions are simply treated as variables. We can pass them into other functions, and return them from functions. ex. below
// const closeModal = () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// overlay.addEventListener('click', closeModal); // Passing function into another function as an argument: First-class functions!

// Dynamic - No data type definitions. Types becomes known at runtime. Data type of variable is automatically changed ex. below
// let x = 23;
// let y = 19;
// x = 'Tobi';

// Single-threaded and Non-blocking event loop - Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
// Why do we need that?
// JavaScript runs in one single thread, so it can only do one thing at a time.
// So what about a long-running task?
// Sounds like it would block the single thread. However, we want non-blocking behavior!
// How do we achieve that?
// By using an event loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.

// What is a JavaScript Engine? Program that executes JavaScript code. ex. V8 engine - powers Chrome and Node.js
// JavaScript engine has a Call Stack and a Heap
// Call Stack - AKA Execution context. i.e. where our code is executed
// Heap - AKA Objectt in memory i.e. where objects are stored

// Computer Science Sidenote:  Compilation vs Interpretation
// Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
// Source -> (compiled) -> Portable file: machine code -> (Execution) -> Program running. Note: Execution can happen way after compilation.

// Interpretation: Interpreter runs through the source code and executes it line by linee
// Source code -> (Execution line by line) -> Program running. Code still needs to be converted to machine code.

// Javascript uses Just-In-Time compilation: Entire code is converted into machine code at once, then executed immediately.
// Source -> (compiled) -> not a portable file: machine code -> (Execution) -> Program running. Note: Execution happens way immediately.

// Abstract Syntax Tree - AST

// Javascript Runtime - This can be imagined as a big box or container including all the things that we need to use JavaScript (in this case in the browser)

// WHAT IS AN EXECUTION CONTEXT? This is an environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed. Exactly one global execution context (EC): Default context, created for code that is not inside any function (top-level). One execution context per function: For each function call, a new execution context is created (All together make the call stack).

// Compilation -> Creation of global execution context (for top-level code) : NOT inside a function -> Execution of the top-level code (inside global EC) -> Execution of functions and waiting for callbacks.

// WHAT'S INSIDE EXECUTION CONTEXT?
// 1. Variable Environment
// - let, const and var declarations
// Functions
// arguments object. NOTE: NOT in arrow functions!

// 2. Scope chain

// 3. 'this' keyword NOTE: NOT in arrow functions!

// CALLSTACK -> "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the

// SCOPE AND THE SCOPE CHAIN
// Scoping: This is how our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

// Lexical scoping: Scoping is controlled by placement of functions and blocks in the code.

// Scope: Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope.

// Scope of a variable: Region of our code where a certain variable can be accessed.

// 3 TYPES OF SCOPE IN JAVASCRIPT
// Global Scope
// Outside of any function or block
// Variables declared in global scope are accessible everywhere.
// example below:
// const me = 'Jonas';
// const job = 'teacher';
// const year = 1989;

// Function Scope
// Variables are accessible only inside function, NOT outside
// Also called local scope
// example below
// function calcAge(birthYear) {
//   const now = 2037;
//   const age = now - birthYear;
//   return age;
// }
// console.log(now); // ReferenceError

// Block Scope (ES6)
// Variables are accessible only *inside block* (block scoped)
// HOWEVER, this only applies to *let and const* variables!
// Functions are also *block scoped* (only in strict mode)
// Example below:
// if (year >= 1981 && year <= 1996) {
//   const millenial = true;
//   const food = 'Avocado toast';
// }
// console.log(millenial); // ReferenceError

// const myName = 'Jonas';

// function first() {
//   const age = 30;
//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }
//   function second() {
//     const job = 'teacher';
//     console.log(`${myName} is a ${age} year old ${job}`);
//   }
//   second();
// }
// first();

// Difference between the SCOPE CHAIN vs CALL STACK
// SCOPE CHAIN - Order in which functions are written in the code. Meaning, it has nothing to do with order in which functions were called!
// CALL STTACK - Order in which functions were called

// SUMMARY
// Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"
// There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;
// Only *let* and *const* variables are block-scoped. Variables declared with *var* end up in the closest function scope
// In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
// Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
// When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.
// The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;
// The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes;
// The scope chain has nothing to do with the ordeer in which functions were called. It does not affect the scope chain at all!

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millenial);
//     add(2, 3);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';

// calcAge(1985);

// HOISTING IN JAVASCRIPT
// Variable Environment
// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope". BEHIND THE SCENES -> Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the *variable environment object*.
// Example below

// Hoisting with Variables
// console.log(me);
// console.log(job) //TDZ - Temporal dead zone
// console.log(year)

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3))

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// THE THIS KEYWORD
// *this* keyword/variable: Special variable that is created for every execution context (every function). Takes the value  of (points to) the "owner" of the function in which the *this* keyword is used.

// *this* is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

// Method *this* = <Object that is calling the method>
// Simple function call *this* = undefined
// Arrow functions *this* = <this of surrounding function(lexical *this*), uses the *this* keyword of its parent >
// Event listener *this* = <DOM element that the handler is atttached to >

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1990)

// REGULAR FUNCTIONS VS ARROW FUNCTIONS
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();

// PRIMITIVES VS OBJECTS (Primitives vs. Reference Types)
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Tobi',
//   age: '35'
// }

// const friend = me
// friend.age = 27

// console.log('Friend: ', friend)
// console.log('Me', me)

// Javascript Primitive Data Types
// Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Primitives types are stored in the Execution context (Call Stack)

// Javascript Reference Types
// Object literal, Arrays, Functions, many more...
// Reference values are stored in the Heap.

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {}

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// To copy an Object you use Object.assign ex. below NOTE: This only creates a shallow copy not a deep clone (i.e. first level copy).
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);