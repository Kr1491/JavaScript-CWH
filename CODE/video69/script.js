let a = prompt(">>");
function factorial(number) {

  let arr = Array.from(Array(number+1).keys())
  let c = arr.slice(1,).reduce((a,b)=>{a*b})

  console.log(c)
  
}

factorial(a);