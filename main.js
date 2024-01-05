// Write a function called add 7 
// that takes one number and returns that number + 7.
let add7 = (number) => number + 7;

// Write a function called multiply 
// that takes 2 numbers and returns their product.

function multiply(num1, num2){
    return num1*num2;
}

// Write a function called capitalize that takes a 
// string and returns that string with only the first letter
// capitalized. Make sure that it can take strings that are 
// lowercase, UPPERCASE or BoTh.

let string=prompt('enter text');
let firstLetter=null;
let restofString=null;
let newString=null;
capitalize(string);

function capitalize(string) {
    firstLetter = string.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    restofString = string.slice(1);
    restofString = restofString.toLowerCase();
    newString = firstLetter + restofString; 
}


// Write a function called lastLetter that takes a string and returns
// the very last letter of that string lastLetter("abcd") should return "d"

let myWord = prompt('Enter a word. The last letter will be returned.');

lastLetter(myWord);

function lastLetter(myWord) {
let letter = myWord.slice(-1);
console.log(letter);
return letter;}