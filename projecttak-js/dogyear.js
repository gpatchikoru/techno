// This variable represents my current age.
var myAge = 28;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

// Each year after year 2 equates to 4 dog years //
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears+laterYears;

var myName = "Gurr".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);