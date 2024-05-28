/*
A set is a collection of values, like an array is. Unlike arrays, however,
sets are not ordered or indexed, and they do not allow duplicates: a
value is either a member of a set or it is not a member; it is not possible
to ask how many times a value appears in a set.
*/

let s = new Set(); // A new , empty set
let t = new Set([1,s]); // A new set with two members

let t1 = new Set(s)

let unique = new Set("Mississippi")
console.log(unique);
console.log(unique.size);