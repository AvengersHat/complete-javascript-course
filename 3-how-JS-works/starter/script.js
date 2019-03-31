///////////////////////////////////////
// Lecture: Hoisting

// Gloabl Execution Context

/*
    ______________________
    | current exectuting |
    |       function     |
    ----------------------
    |  Global Execution  |
    |      Context       |
-----------------------------
Whe global code runs, it is operating in the Global Exectution Conext, as porperties of the global context object.

When a function is executed, it creates a new execution context and stacks ontop of the Global exectuion context. 

When it finishes it is said to return to the next context in the stack and pops off the execution stack.

*/

// Function declaration, can call function before it is created
calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year);
}
// Function expression 
// retirement(1990); (hoisting does not work)

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// Variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);








///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









