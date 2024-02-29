let myName = "Manjunath"

console.log("String Length : ", myName.length)
console.log("String UpperCase : ", myName.toUpperCase());
console.log("String Char At : ", myName.charAt(6));
console.log("String Position : ", myName.indexOf("a"));

let newStr = myName.substring(2,7);
console.log("NewString : ", newStr)

let sliceString = myName.slice(0,4);
console.log("Slice String : ", sliceString);

let reverseSlice = myName.slice(-3,2)
console.log("ReverseStrng : ", reverseSlice)

let trimStr = "   Manjunath   "
console.log("Before trim : ", trimStr)
trimStr = trimStr.trim()
console.log("After Strim : ",trimStr)

let replaceStr = "Https://goog.com/kal%30man"
let newss = replaceStr.replace('%30', '-')
console.log(newss)

let changeStrToArray = "Manjunath-Kal"
console.log(changeStrToArray.split('-'))