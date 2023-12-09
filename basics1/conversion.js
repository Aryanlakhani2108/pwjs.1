let bankBalance = '123' ;

let bankBalanceinInt = parseInt(bankBalance)  // Instead of parseInt() we can also use Number() 

console.log( bankBalance)
console.log( bankBalanceinInt) // output => 100

// If string/number is empty(i.e does not mean it has 0 as a value it's value is undefined) then if we pass Boolean() if will give fasle output
// If string/number is not empty then it will give output of true

let bankBalance2 = 'abc';

let bankBalanceinInt2 = parseInt(bankBalance2)

console.log(bankBalanceinInt2)

// output => will be NaN