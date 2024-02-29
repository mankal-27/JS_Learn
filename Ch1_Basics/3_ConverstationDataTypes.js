let score = 34;
let newScore = "34";
let newScoreWithCh = "34acc";
console.log(typeof score)
console.log(typeof newScore)
let valueInNumber = Number(newScore);
let newValue = Number(newScoreWithCh);
console.log(typeof valueInNumber);
console.log("newvalue", newValue);
console.log(typeof newValue);
let valueS = NaN;
console.log("------", Number(valueS));

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("---Boolean----", booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false
// "Manjunath" => true

let someNumber = 333
let stringNumber = String(someNumber);
console.log("StringNumber ---", stringNumber);
console.log("stringNumber Type of ", typeof stringNumber);

// ****************** Operations ********************//

let value = 3
let negValue = -value
console.log("NegValue ----", negValue);

let str1 = "hello"
let str2 = " Manjunath"
let finalStr = str1 + str2
console.log("final String ", finalStr);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(2 + 2 + "3");

console.log(+true);
console.log(+"");

let gameCounter = 100;
console.log("Old Counter ", gameCounter);
gameCounter++;
console.log("New counter ", gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment