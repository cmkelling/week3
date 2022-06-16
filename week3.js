//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23,64, 2, 8, 28, 93];

var lastElement = ages.pop();
var firstElement = ages.shift();

function ageDifference (lastElement, firstElement) {
    console.log (lastElement -= firstElement);
}

ageDifference (lastElement, firstElement);

ages.push(26);
console.log(ages);

var lastElement = ages.pop();
var firstElement = ages.shift();

console.log(ages);
ageDifference (lastElement, firstElement);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var totalAge = 0
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i]
}

var avg = totalAge / ages.length;

console.log(avg);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

var totalLetters = 0
for (let i = 0; i < names.length; i++) {
    totalLetters += String.length
}

var avgLength = totalLetters / String.length;
console.log(avgLength);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (element of names) {
    console.log(names.join(' '));
}

//How do you access the last element of any array?
/* If you know the last item, you can either find or know its index and write in array[number].
/* If you do not know the last item in an array, you can create a new variable that takes the last item out. Such as lastItem = array[array.length -1].

//How do you access the first element of any array?
/* The first element of an array is easier to access as JS arrays always start with an index of 0. So to access the first element, all you need is let variable = array[0]*/

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sum = 0
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let concatenated = ' '
function word3(word, n) {
    for (let i = 0; i < n; i++) {
        concatenated = concatenated + word;
    }
    console.log(concatenated);
}

word3 ('Hello', 3);

//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName (firstName, lastName) {
    let fName = firstName + ' ' + lastName;
    console.log(fName);
}

fullName ('Susie', 'Collins');

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function total100 (array) {
    if (array.length > 100) {
        return true
    } else {
        return false
    }
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(total100(array1));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
