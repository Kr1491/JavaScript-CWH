let a = []
let b = 0;

while (true) {
  let c = prompt(">>")
  num = Number(c)
  a[b] = num;
  b++;

  if (num === 0) {
    break
  }

}

console.log(a)