let tries = 5;
let sum = 0;

for (let i = 1; i <= tries; i++) {
  userInput = prompt("Enter Number>>")
  userInput = Number(userInput)
  sum = userInput + sum;
}

let out = sum/5

console.log("Mean of 5 numbers is: "+ out)