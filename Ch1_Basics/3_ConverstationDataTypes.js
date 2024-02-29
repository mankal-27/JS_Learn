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