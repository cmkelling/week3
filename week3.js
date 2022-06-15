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

ageDifference(lastElement, firstElement);