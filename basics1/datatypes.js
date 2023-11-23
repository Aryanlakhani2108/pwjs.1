// Two categories of Data types in js

// Primitive and Reference (Non - Primitive)

// Primitive (STACK):
/*
Strings
Numbers
Boolean
Null
Undefined
BigInt
Symbol
*/

const fistname = "Lakhani";
const age = 20;
let isLoggedIn = true;
const nodeVersion = null; 
let bankBalance = undefined;
const buttonId = Symbol("id");
const aReallyLongNumber = 23874928372398n;

/*
Reference (HEAP) : 
Arrays 
Objects
Function 
*/

const numbers = [1,2,3,4];
const heroes = ["superman" , "batman" , "flash"];

const userObject = { 
    name : "Aryan",
    roll : 21,
    age : 19,
    isLoggedIn: true
}


//function 
const sayHello = function(){

    console.log("Aryan");
}

const registered = function(){}
const islive = function(){}

