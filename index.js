let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

/*Triggering the animation*/

let imgCtn1 = document.querySelector("#imgCtn img:nth-child(2)");
let imgCtn2 = document.querySelector("#imgCtn img:nth-child(3)");
let imgCtn3 = document.querySelector("#imgCtn img:nth-child(4)");
let imgCtn4 = document.querySelector("#imgCtn img:nth-child(5)");
let imgCtn5 = document.querySelector("#imgCtn img:nth-child(6)");
let imgCtn6 = document.querySelector("#imgCtn img:nth-child(7)");
let imgCtn7 = document.querySelector("#imgCtn img:nth-child(8)");
let imgCtn8 = document.querySelector("#imgCtn img:nth-child(9)");
let imgCtn9 = document.querySelector("#imgCtn img:nth-child(10)");

let img1 = document.getElementById("img1");

function callanimation() {
  imgCtn1.style.animation = "display 18s infinite";
  imgCtn2.style.animation = "display 18s infinite";
  imgCtn2.style.animationDelay = "2s";
  imgCtn3.style.animation = "display 18s infinite";
  imgCtn3.style.animationDelay = "4s";
  imgCtn4.style.animation = "display 18s infinite";
  imgCtn4.style.animationDelay = "6s";
  imgCtn5.style.animation = "display 18s infinite";
  imgCtn5.style.animationDelay = "8s";
  imgCtn6.style.animation = "display 18s infinite";
  imgCtn6.style.animationDelay = "10s";
  imgCtn7.style.animation = "display 18s infinite";
  imgCtn7.style.animationDelay = "12s";
  imgCtn8.style.animation = "display 18s infinite";
  imgCtn8.style.animationDelay = "14s";
  imgCtn9.style.animation = "display 18s infinite";
  imgCtn9.style.animationDelay = "16s";
}

function callrevanimation() {
  imgCtn1.style.animation = "displayrev 18s infinite";
  imgCtn2.style.animation = "displayrev 18s infinite";
  imgCtn2.style.animationDelay = "2s";
  imgCtn3.style.animation = "displayrev 18s infinite";
  imgCtn3.style.animationDelay = "4s";
  imgCtn4.style.animation = "displayrev 18s infinite";
  imgCtn4.style.animationDelay = "6s";
  imgCtn5.style.animation = "displayrev 18s infinite";
  imgCtn5.style.animationDelay = "8s";
  imgCtn6.style.animation = "displayrev 18s infinite";
  imgCtn6.style.animationDelay = "10s";
  imgCtn7.style.animation = "displayrev 18s infinite";
  imgCtn7.style.animationDelay = "12s";
  imgCtn8.style.animation = "displayrev 18s infinite";
  imgCtn8.style.animationDelay = "14s";
  imgCtn9.style.animation = "displayrev 18s infinite";
  imgCtn9.style.animationDelay = "16s";
}

/*Function call for sections of parallax page*/

function showEarth() {
  window.location.href = "planets.html#earth";
}
function showSun() {
  window.location.href = "planets.html#sun";
}
function showMars() {
  window.location.href = "planets.html#mars";
}
function showJupiter() {
  window.location.href = "planets.html#jupiter";
}
function showSaturn() {
  window.location.href = "planets.html#saturn";
}
function showVenus() {
  window.location.href = "planets.html#venus";
}
function showMercury() {
  window.location.href = "planets.html#mercury";
}
function showUranus() {
  window.location.href = "planets.html#uranus";
}
function showNeptune() {
  window.location.href = "planets.html#neptune";
}
