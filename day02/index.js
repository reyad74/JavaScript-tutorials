//expresion and conditionals
console.log(1 === 1); //true
let x = 1;
let y = 45;
console.log("x + Y = ", x + y); //addition
console.log("x - Y = ", x - y); //subtraction
console.log("x / Y = ", x / y); //division
console.log("x * Y = ", x * y); //multiplication
console.log("x ** Y = ", x ** y); //exponentiation
console.log("x % Y = ", x % y); //modulus
console.log("x++ = ", x++); //increment
console.log("x-- = ", x--);//decrement 

//Assignment operators
let a = 1;
a += 2; // a = a + 2
a -= 2; // a = a - 2
a *= 2; // a = a * 2
a /= 2; // a = a / 2
a %= 2; // a = a % 2
a **= 2; // a = a ** 2
console.log("a += 2 = ", a);

//Comparison operators
let b = 1;
(b == 1); //equal to
(b === 1); //strict equal to
(b != 1); //not equal to
(b !== 1); //strict not equal to
(b > 1); //greater than
(b < 1); //less than
(b >= 1); //greater than or equal to
(b <= 1); //less than or equal to
(b ? 1 : 0); //ternary operator
console.log("b == 1 = ", b == 1);

//Logical operators
let c = 1;
(c && 1); //logical and
(c || 1); //logical or
(!c); //logical not
console.log("c && 1 = ", c && 1);
console.log(x>1 && y>1); //false