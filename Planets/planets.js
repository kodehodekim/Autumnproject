// function imgup() {
//     document.getElementsByName('').style.height = "900px";

//  } else if document.getElementById('image').style.height = "900px"; {
//     document.getElementById('image').style.height = "500px";
//  }

// if (max-height = "400px";) {
//     planet2()
// }

// if (max-height = "900px";) {
//     document.getElementById("planet2txt").innerHTML = "PLease click me"
//     let max-height = "400px"

let planet2IsCollapsed = true;
const planetEl = document.getElementById("planet2");
const planetElText = document.getElementById("planet2text");

function planet2() {
  if (planet2IsCollapsed) {
    planetElText.style.fontSize = "12px";
    planetElText.textContent = "Click me to shrink";
    planetEl.style.transitionDuration = "1.5s";
    planetEl.style.minHeight = "80%";
    planet2IsCollapsed = false;
  } else {
    planetElText.textContent = "Mercury";
    planetElText.style.fontSize = "50px";
    planetEl.style.transitionDuration = "1.5s";
    planetEl.style.minHeight = "40%";
    planet2IsCollapsed = true;
  }
}

function planet3() {}

function planet4() {}

function planet5() {}

function planet6() {}

function planet7() {}

function planet8() {}

function planet9() {}
