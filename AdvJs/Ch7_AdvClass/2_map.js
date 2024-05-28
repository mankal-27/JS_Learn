let m = new Map(); // create a new , empty map
let n = new Map([
    ["one",1],
    ["two",2]
]);
console.log(n);

let copy = new Map(n)
let o = {x:1,y:3};
let p = new Map(Object.entries(o));
console.log(copy);
console.log(o);
console.log(p);