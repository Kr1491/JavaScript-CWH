let a = 5;
let num = 1;
function factorial(number) {
  let arr = Array.from(Array(number+1).keys())
  arr.slice(1,).forEach(element => {
    num = num*element;
  });
  console.log(`Factorial of ${a} is ${num}`)
}

factorial(a)