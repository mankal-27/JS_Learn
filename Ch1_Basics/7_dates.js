let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,3)
//let myCreatedDate = new Date("2024-01-24")
let myCreatedDate = new Date("01-12-2024")
console.log("ddd", myCreatedDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(timeStamp/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMilliseconds());
console.log(newDate.getFullYear());
console.log(newDate.getTime());