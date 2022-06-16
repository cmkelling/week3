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
difference (lastElement, firstElement);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var totalAge = 0
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i]
}

var avg = total / ages.length;

console.log(avg);

