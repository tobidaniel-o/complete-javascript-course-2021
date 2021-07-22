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
x = "Tobi"

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