//if statements
// let school = "Hello";
// if (school === "Zindua") {
//   //condition
//   console.log("Zindua School");
// } else {
//   console.log("Not Zindua School");
// }
/**
 *@LOGICALOPERATORS
 *STRICTLYEQUAL-> ===
 *AND-> &&
 *OR-> ||
 *GREATERTHAN-> >
 *LESSTHAN-> <
 *GREATERTHANOREQUALTO-> >=
 *LESSTHANOREQUALTO-> <=
 *NOT-> !
 *NOTEQUALTO-> !==
 */
// let name = "James";
// //switch statements
// switch (name) {
//   case "James":
//     console.log(" i am James");
//     break;
//   case "Jack":
//     console.log("i am Jack");
//     break;
//   default:
//     console.log("Not James");
//     break;
// }
// //FUNCTIONS
// function consoleHello() {
//   //function declaration
//   console.log("Hello"); //function definition/body
// }
// consoleHello(name); //calling the function/

// //FOR LOOPS
// for (let i = 0; i < 10; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// let number = 15;
// for (let i = 1; i < 15; i++) {
//   if (i % 3 === 0) {
//     console.log(number % 3);
//   }
// }

// for (let i = 1; i < 15; i++) {
//   if (i % 5 === 0) {
//     console.log(number % 5);
//   }
// }
let n = 15;
let sum = 0;
for (let i = 1; i < n; i++) {
  let rem = i % 3;
  let rem2 = i % 5;
  if (rem === 0 || rem2 === 0) {
    sum = sum + i;
  }
}
console.log("sum:", sum);
