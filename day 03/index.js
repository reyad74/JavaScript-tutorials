console.log('Hello, world!');
if(1 === 4) {
  console.log('1 is 1');
}
else {
  console.log('1 is not 1');
}
//Conditional if else
 let a = prompt("Enter a number")
// console.log(a);
// console.log(typeof a);
a = Number.parseInt(a); // Convert string to number
console.log(typeof a);
if(a>0) {
  console.log("Positive number");
  alert("valid number");
}
else if(a <9){
    console.log("Negative number");
    alert("valid number");
}
else if(a<8 && a <9){
    console.log("Negative number");
    alert("valid number");
}
else{
    console.log("Negative number");
    alert("invalid number");
}
console.log("End of the program");
//Home work -Explore switch case and write a program using switch case in the commnt section
// Follow link =  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

//ternary operator
console.log(a>0 ? "Positive number" : "Negative number");

