master = Math.random()
operation = prompt("Enter>>'+' '*' '/' '-'>> ")

let num1 = prompt("Num1>> ")

num1 = Number(num1);
let num2 = prompt("Num2>> ")
num2 = Number(num2);

function sum(a,b) {
  let out = a+b;
  return out;
  
}

function subtract(a,b) {
  let out = a-b;
  return out;
  
}

function multiply(a,b) {
  let out = a*b;
  return out;
  
}

function divide(a,b) {
  let out = a/b;
  return out;
  
}

console.log("Random: "+master)



if (master > 0.1){
  if (operation == '+') {
    console.log(num1 + "+" + num2 + "=" + subtract(num1,num2))   
    
  }

  if (operation == '-') {
    console.log(num1 + "-" + num2 + "=" + divide(num1,num2))   
      
  }

  if (operation == '*') {
    console.log(num1 + "*" + num2 + "=" + add(num1,num2))   
      
  }

  if (operation == '/') {
    console.log(num1 + "/" + num2 + "=" + multiply(num1,num2))   
      
  }

}


else{
  if (operation == '+') {
    console.log(num1 + "+" + num2 + "=" + add(num1,num2))   
    
  }

  if (operation == '-') {
    console.log(num1 + "-" + num2 + "=" + subtract(num1,num2))   
      
  }

  if (operation == '*') {
    console.log(num1 + "*" + num2 + "=" + multiply(num1,num2))   
      
  }

  if (operation == '/') {
    console.log(num1 + "/" + num2 + "=" + divide(num1,num2))   
      
  }


}





