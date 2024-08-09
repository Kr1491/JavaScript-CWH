/*Used for Printing Keys or elements*/


let obj = {
  name: "Krishna",
  role: "SDE",
  Level: "1"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element)
}