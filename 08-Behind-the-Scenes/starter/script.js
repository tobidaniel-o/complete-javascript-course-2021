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
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal); // Passing function into another function as an argument: First-class functions!

// Dynamic - No data type definitions. Types becomes known at runtime. Data type of variable is automatically changed ex. below
let x = 23;
let y = 19;
x = 'Tobi';

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
// Global
// Outside of any function or block
// Variables declared in global scope are accessible everywhere.
// example below:
const me = 'Jonas';
const job = 'teacher';
const year = 1989;
