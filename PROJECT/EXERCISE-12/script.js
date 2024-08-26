function randColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}


let a = document.querySelectorAll(".box")
a.forEach(element => {
  element.style.backgroundColor = randColor()
  element.style.color = randColor()
});