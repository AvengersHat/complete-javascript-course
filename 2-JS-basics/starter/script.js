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

//  statement
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
/*
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
*/

/***********************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}


var ageJohn = calculateAge(1982);
var ageMark = calculateAge(1990);
var ageMary = calculateAge(1972);


console.log(ageJohn, ageMark, ageMary);

function yearsToRetire(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName +' retires in ' + retirement + ' years.')
    } else {
    console.log(firstName + ' is retired.')
    }

}

yearsToRetire(1982, 'Gareth');
yearsToRetire(1982, 'John');
yearsToRetire(1990, 'Mark');
yearsToRetire(1940, 'Mary');
*/


/****************************
* Function Statements & Expressions
*/

// Function declaration
// function whatDoYuoDo(job, firstName){}


// Function expression

/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids.';
        case 'driver':
            return firstName + ' drives an uber.'
        case 'designer':
            return firstName + ' designs crap.'
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('driver', 'steve'));
console.log(whatDoYouDo('teacher', 'James'));
*/

/******************************
* Arrays
*/

/*// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);
console.log(names[2]);


// Mutate Array Data
names[1] = 'farty pants';
names[names.length] = 'Mary';

console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // adds element to end of array
john.unshift('Mr'); // adds element to start of array
john.pop(); // removes element from end of array
john.shift(); // removes element from start of array


console.log(john);

console.log(john.indexOf(1990)); // finds index of value in array. Returns -1 if not found in the array.

// if value not found in array -1
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
: 'John IS a designer';
console.log(isDesigner);*/


/*****************************
* CODING CHALLENGE 3 21/03/2019
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
var bills = [124, 48, 268]; // bills
var tips = []; // container for tips
var totals = []; // container for total payable bill


/*****
* My attempt

function howBigTip(bill){
    if (billSize < 50) {
        return tips.push((20 / 100) * bill);
    } else if (bill >= 50 && billSize < 200){
        return tips.push((15 / 100) * bill);
    } else {
        return tips.push((10 / 100) * bill);
    }
}



function totalBill(billAmount){
    howBigTip(billAmount);
    totals.push(billAmount);
    return
}

totalBill(bills[0]);
totalBill(bills[1]);
totalBill(bills[2]);

console.log('Bill\'s ' + bills);
console.log('Tip\'s ' + tips);
console.log('Total bill\'s ' + totals);







/************
* Solution


function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}




console.log(tipCalculator(bills[0]));



//test

tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])
];


totals = [tipCalculator(bills[0])+bills[0],
            tipCalculator(bills[1])+bills[1],
            tipCalculator(bills[2])+bills[2]
         ];

console.log(bills, tips, totals);

*/

/***************************
* Objects
*/

/*
// Object literal
var john = {
    firstName: 'John', // key value pair
    lastName: 'Smith',
    birthYear: 1982,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

console.log(john.firstName); // to read a key value, use 'dot' notation
console.log(john['lastName']); // to read a key value, or brackets and a key name as a string
var x = 'birthYear';
console.log(john[x]);

// to mutate data of an object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1968;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/*******************************
*Objects and methods
*/

/*// functions attached to objects are called methods

var john = {
    firstName: 'John', // key value pair
    lastName: 'Smith',
    birthYear: 1982,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(currentYear){
        this.age = currentYear - this.birthYear; // Use this.___ to call property relating to the current object.
        // you can also use this.___ to append a property
    }

};

john.calcAge(2020);

console.log(john);*/

/**********************************
CODING CHALLENGE 4 23/03/2019
*/


/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


/*function calcBMI(mass, height){
    return mass / (height * height);
console.log(calcBMI(1,2));
}*/
/*
var john = {
    fullName: 'John Smith',
    mass: 60
    , // Mass in kilos
    height: 2, // Height in metres
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark E Mark',
    mass: 60, // Mass in kilos
    height: 2, // Height in metres
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
*/
/*
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the highest bmi at ' + john.bmi);
} else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + ' has the highest bmi at ' + mark.bmi);
} else {
    console.log('both ' + john.fullName + ' and ' + mark.fullName + ' have the same bmi at ' + john.bmi);
}
*/


// From solution - integrate the function calls into the first line of the if statement. Works because of the return at the end of the method statement in the object.
/*
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has the highest bmi at ' + john.bmi);
} else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + ' has the highest bmi at ' + mark.bmi);
} else {
    console.log('both ' + john.fullName + ' and ' + mark.fullName + ' have the same bmi at ' + john.bmi);
}





console.log(john, mark);
*/

/*************************************************
* Loops and Iteration
*/
/*

for(var i = 0; i < 10; i++) {
    console.log(i);
}


for(var i = 0; i < 20; i+= 2) {
    console.log(i);
}


// continue and break statements



var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

// for (starting value; test condition; increment) {}


// For loop
for (i = john.length; i > 0; i--){
    console.log(john[i-1]);
}


// While loop
var i = john.length - 1;
while (i >= 0){
    console.log(john[i]);
    i--;
}


*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


/*********

first go


var john = {
    firstName: 'John',
    bills: [10],//[124, 48, 268, 180, 42, 1000, 1000],
    tips: [],
    finalBills: [],
    
    calcTip: function (){
    // this.finalBills = [];  new properties can be added to the object john within the function with ths.___ 
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills;  // can be used to tidy code below   
            
            if (this.bills[i] < 50) {                          // decides percentage
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            // Calc tips and final bills to add to arrays
            this.tips[i] = (percentage * this.bills[i]);        // tips
            this.finalBills[i] = (this.tips[i] + this.bills[i]);
        }
    }
}

var mark = {
    firstName: 'Mark',
    bills: [5], //[77, 375, 110, 45],
    tips: [],
    finalBills: [],
    
    calcTip: function (){
    // this.finalBills = [];  new properties can be added to the object john within the function with ths.___ 
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills;  // can be used to tidy code below   
            
            if (this.bills[i] < 100) {                          // decides percentage
                percentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            // Calc tips and final bills to add to arrays
            this.tips[i] = (percentage * this.bills[i]);        // tips
            this.finalBills[i] = (this.tips[i] + this.bills[i]);
        }
    }
}

// Calcualte average tip
function tipsAverage(tipsArray){
    var runningTotal = 0;
    
    for (var i = 0; i < this.tipsArray.length; i++) {
        (runningTotal = runningTotal + this.tipsArray[i]);
    }
    return runningTotal / this.tipsArray.length;
}






john.calcTip();
mark.calcTip();
tipsAverage(john.tips);
tipsAverage(mark.tips);
console.log(tipsAverage(john.tips));
console.log(tipsAverage(mark.tips));

// Publish highest average



if (tipsAverage(john.tips) > tipsAverage(mark.tips)) {
    console.log(john.firstName + ' has the highest average ' + tipsAverage(john.tips));
} else if (tipsAverage(john.tips) < tipsAverage(mark.tips)) {
    console.log(mark.firstName + ' has the highest average ' + tipsAverage(mark.tips));
} else {
    console.log('both ' + john.firstName + ' and ' + mark.firstName + ' have the same tip average at ' + john.tips);
}
*/

/**** Second Go ******/


var john = {
  firstName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  tipCalc: function () {
    this.finalBills = [];
    this.tips = [];
    
    for (var i = 0; i < this.bills.length; i++){
    var percentage;
    var bill = this.bills[i]
    // Decides percentage  
    switch (true) { // Switch test to see which condition is true!!! YES
      case (bill < 50): percentage = .20;
        break;
      case (50 < bill < 200): percentage = .15;
        break;
      default: percentage = .1;
      }
    // Calculate tips and finalBills and add to arrays  
      this.tips[i] = percentage * bill;
      this.finalBills[i] = percentage * bill + bill;
      }
  }
}

var mark = {
  firstName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  tipCalc: function () {
    this.finalBills = [];
    this.tips = [];
    
    for (var i = 0; i < this.bills.length; i++){
    var percentage;
    var bill = this.bills[i]
    // Decides percentage  
    switch (true) { // Switch test to see which condition is true!!! YES
      case (bill < 100): percentage = .2;
        break;
      case (100 < bill < 300): percentage = .1;
        break;
      default: percentage = .25;
      }
    // Calculate tips and finalBills and add to arrays  
      this.tips[i] = percentage * bill;
      this.finalBills[i] = percentage * bill + bill;
      }
  }
}


john.tipCalc();
mark.tipCalc();


function avg(tips){
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    var sum = sum + tips[i];
  }
  return sum / tips.length;
}


// Calculate averages and add to the john object
john.average = avg(john.tips);

mark.average = avg(mark.tips);

console.log(john, mark);
console.log(john.tips, mark.tips);
console.log(avg(john.tips), avg(mark.tips));


switch (true) {
    case (john.average > mark.average): console.log(john.firstName + ' is highest');
    break;
    case (mark.average > john.average): console.log(mark.firstName + ' is highest');
    break;
    default: console.log('they\'re the same')
}
