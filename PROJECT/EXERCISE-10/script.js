//Buisness Name Generator Without Using Arrays



let a = Math.random()
let b = Math.random()
let c = Math.random()

let first; let second; let third;

/*
First>>
Crazy
Amazing
Fire

Second>>
Engine 
Foods
Garments

Third>>
Bros
Limited 
Hub*/

if (a <= 0.33) {
  first = "Crazy"
}

else if(a > 0.33 && a <=0.66){
  first = "Amazing"
}

else{
  first = "Fire"
}

if (b <= 0.33) {
  second = "Engine"
}

else if(b > 0.33 && b <=0.66){
  second = "Foods"
}

else{
  second = "Garments"
}

if (c <= 0.33) {
  third = "Bros"
}

else if(c > 0.33 && c <=0.66){
  third = "Limited"
}

else{
  third = "Hub"
}


console.log(first + second + third)