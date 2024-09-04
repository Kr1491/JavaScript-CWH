function randomg(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}
let colo = prompt("Enter");

let a = document.querySelectorAll(".box");
a.forEach(element => {
    element.style.backgroundColor = randomg();
    element.style.color = colo;
});