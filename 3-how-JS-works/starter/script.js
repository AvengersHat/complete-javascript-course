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
/*
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
*/







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
    //console.log(c);
    console.log(a + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing - without parentheses method is the variable
mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this only becomes something once a method is called.

