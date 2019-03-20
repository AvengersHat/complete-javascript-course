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
* If / else statements
*/

/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}



var massMark, massJohn, heightMark, heightJohn;
massMark = 163;
heightMark = 1.8;
massJohn = 85;
heightJohn = 1.6;

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark *= 2);
bmiJohn = massJohn / (heightJohn *= 2);

console.log('Mark BMI ' + bmiMark, ', John BMI ' + bmiJohn);

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is greater than John's")
} else {
    console.log("John's BMI is greater than Mark's")
}
*/


/****************************
* Boolean logic
*/
/*

var firstName = 'John';
var age = 25;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');        
} else if(age >= 20 && age < 30) { // Between 20 and 30
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
}

*/

/****************************
* The Ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 10;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

// condition - then if statement [?] - then else statement [:]

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);
*/

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement
/*
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs websites')
        break;
    default:
        console.log(firstName + ' something else')
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


// in example above - Switch statement changes to the case that is true

/******************************
* Truthy an Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', Nan
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators

if (height == '23'){
    console.log('The == operator does type coercion!');
}
*/

/*******************************************
* CODING CHALLENGE 2 20/03/2019
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var teamJohn, teamMike;
teamJohn = (89 + 120 + 105) / 3;
teamMike = (116 + 94 + 123) / 3;
teamMary = (97 + 134 + 105) / 3;

console.log(teamJohn);
console.log(teamMike);
console.log(teamMary);


switch (true){
    case teamJohn > teamMike:
        console.log('John\'s team win\'s with average ' + teamJohn);
        break;
    case teamMike > teamJohn:
        console.log('Mike\'s team win\'s with average ' + teamMike);
        break;
    case teamJohn === teamMike:
        console.log('It\'s a tie. All teams average ' + teamJohn);
}


if (teamJohn > teamMike && teamJohn > teamMary){
    console.log('John\'s team win\'s with average ' + teamJohn);
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log('Mike\'s team win\'s with average ' + teamMike);
} else if (teamMary > teamJohn && teamMary > teamMike){
    console.log('Mary\'s team win\'s with average ' + teamMary);
} else {
    console.log('It\'s a tie. All teams average ' + teamJohn)
}

// How can I do it with a switch????
switch (true){
    case (teamJohn > teamMike && teamJohn > teamMary):
        console.log('John\'s team win\'s with average ' + teamJohn);
        break;
    case (teamMike > teamJohn && teamMike > teamMary):
        console.log('Mike\'s team win\'s with average ' + teamMike);
        break;
    case (teamMary > teamJohn && teamMary > teamMike):
        console.log('Mike\'s team win\'s with average ' + teamMary);
        break;
    case (teamJohn === teamMike === teamMary):
        console.log('It\'s a tie. All teams average ' + teamJohn);
}

