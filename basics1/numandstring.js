const firstname = "Hello";
const lastname = "AL";

const myname = ( firstname + lastname);
// console.log(myname);

// console.log(`my first name is ${firstname} and my last name is ${lastname} `);

const username = new String('hiteshdotcom');
// console.log(username[0]); // output => h it accessed me the 0th index of the string 'hiteshdotcom'

// console.log(username.length);  // username.length gives the length of the string 

// console.log(username.charAt);
// got mdn docs and search strings in javascript section 

let email = "    hc@pw.live       ";
console.log(email.trim()); // trim() => will trim spaces 

let emailtwo = "hc@pw.live";
console.log(emailtwo.replace('hc' , 'hitesh')); // replace() => replaces our value in the variable to the new one 

console.log(email.includes('hc')); // includes() => asks question like does email variable contains 'hc' in it

let uppercaseEmail = email.toUpperCase();
console.log(uppercaseEmail); 

const num = new Number(5.345783458349);
console.log(num.toFixed(3)); // .toFixed(num) => made to round the decimal number upto 3 decimal places

const subcribers = 100000
console.log(subcribers.toLocaleString()); // made 100000 to 100,000

console.log(Number.MAX_VALUE); // gives us the maximum value js can hold 1.7976931348623157e+308

console.log(Math.floor(Math.random()*10));


