let empty = {}

let point = {x:0, y:1};

let p2 = {x: point.x, y: point.y+1};

let book = {
    "main title": "JS Advance",
    "sub-title" : "Advance Course",
    for: "all audiences",
    author: {
        firstname: "David",
        lastname: "kel"
    }
};
console.log(book);

// new object

let o = new Object(); // creates an empty object : same as {}.
let a = new Array(); // creates an empty array : same as [].
let d = new Date(); // creates a date object representing the current time
let r = new Map(); // create a map object for key/value mapping

//Objecct create

let o1 = Object.create({x:1, y:3});
console.log(o1.x + o1.y);

let o2 = Object.create(null);
console.log(o2);

let o3 = Object.create(Object.prototype);
console.log(o3);