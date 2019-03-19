/******************************
* Variables and Data Types
*/
/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);*/

//single line comments using slashes


/******************************
* Variable mutation and type coercion
*/

/*var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/

/****************************
* Basic operators
*/
/*var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators

var johnOlder = ageJohn > ageMark;

console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);*/




/*********************************
* Operator precedence
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators

x *= 2;
console.log(x);

x += 10;
console.log(x);

x = x + 1;
x += 1;
x++; // Increment by 1
x--; // Decrement by 1
console.log(x);*/



/*******************
* CODING CHALLENGE 1 19/03/2019
*/

/*var massMark, massJohn, heightMark, heightJohn;
massMark = 63;
heightMark = 1.8;
massJohn = 85;
heightJohn = 1.6;

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark *= 2);
bmiJohn = massJohn / (heightJohn *= 2);

var bmiMarkGreater = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);

console.log("Is Mark's BMI greater than John's? " + bmiMarkGreater);*/

/*******************
* If else statements
*/