let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let imgCtn1 = document.querySelector("#imgCtn img:nth-child(2)");
let imgCtn2 = document.querySelector("#imgCtn img:nth-child(3)");
let imgCtn3 = document.querySelector("#imgCtn img:nth-child(4)");
let imgCtn4 = document.querySelector("#imgCtn img:nth-child(5)");
let imgCtn5 = document.querySelector("#imgCtn img:nth-child(6)");

function callanimation() {
  imgCtn1.style.animation = "display 10s infinite";
  imgCtn2.style.animation = "display 10s infinite";
  imgCtn2.style.animationDelay = "2s";
  imgCtn3.style.animation = "display 10s infinite";
  imgCtn3.style.animationDelay = "4s";
  imgCtn4.style.animation = "display 10s infinite";
  imgCtn4.style.animationDelay = "6s";
  imgCtn5.style.animation = "display 10s infinite";
  imgCtn5.style.animationDelay = "8s";
}

function callrevanimation() {
  imgCtn1.style.animation = "displayrev 10s infinite";
  imgCtn2.style.animation = "displayrev 10s infinite";
  imgCtn2.style.animationDelay = "2s";
  imgCtn3.style.animation = "displayrev 10s infinite";
  imgCtn3.style.animationDelay = "4s";
  imgCtn4.style.animation = "displayrev 10s infinite";
  imgCtn4.style.animationDelay = "6s";
  imgCtn5.style.animation = "displayrev 10s infinite";
  imgCtn5.style.animationDelay = "8s";
}
