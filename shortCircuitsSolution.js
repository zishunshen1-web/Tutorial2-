/*
    Set the values of variables as explained in comments to get the correct value.

    The first statements are just examples to get used to setting variables. Use let
    to set a, b, e, f to the values indicated in the comments.

    Setting the remaining values is a puzzle for you. Non-boolean values in a logical expression 
    will be cast to boolean values. See class notes or experiment to see what evaluates as true.
*/

// AND short-circuit
let a; //set to false
let b; //set to true
let c = a && console.log("This will NOT print"); // returns false
let d = b && console.log("This will print"); // returns undefined

// OR short-circuit
let f; //set to true
let g; //set to false
let h = true || console.log("This will NOT print"); // returns true
let i = false || console.log("This will print"); // returns undefined

//set t so that v contains "hello"
//do not use true or false
let t; 
let u = "hello"; 
let v = t && u;      

//set x and y so that z contains 0
//do not use true or false
let x; 
let y; 
let z = x || y;    

console.log(c); // false
console.log(d); // undefined (because console.log returns undefined)
console.log(h); // true
console.log(i); // undefined
console.log(v); // hello
console.log(z); // 0
