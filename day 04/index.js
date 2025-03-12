// //program to add first n natural numbers
// let n = prompt('Enter a positive integer value of n : ');
// let sum = 0;
// n = Number.parseInt(n);

// for(let i = 0; i < n; i++) {
//     sum += (i + 1);
//     console.log((i + 1), "+ ");
// }
// console.log("sum of first " + n + " natural numbers is : " + sum);
//for in loop
let obj = {
    reyad: 30,
    rahman: 49,  
    rahim: 59,
    karim: 69,
    rahima: 79,
}
//for in loop
for (let key in obj) {
  
    console.log(key + " : " + obj[key]);
}
//for of loop
for (let a of "reyad") {
    console.log(a);
}