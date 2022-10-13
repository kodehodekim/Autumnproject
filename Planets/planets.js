/* Function for Home \ Git button */
function gotoHome() {
  window.location.href = "index.html";
}
function gotoGit() {
  window.location.href = "index.html";
}

/* Expand and collapse the images */
let planetIsCollapsed = true;
const pAnims = document.getElementsByClassName("pAnim");

for (const pAnimEl of pAnims) {
  pAnimEl.addEventListener("click", function () {
    const pTextEl = pAnimEl.querySelector(".pText");

    if (!pAnimEl.classList.contains("collapsed")) {
      pTextEl.textContent = "Click to shrink";
      pTextEl.style.fontSize = "12px";
      pAnimEl.style.transitionDuration = "1.5s";
      pAnimEl.style.minHeight = "80%";
      pAnimEl.classList.add("collapsed");
      console.log("Expanded");
    } else {
      pTextEl.textContent = "";
      pAnimEl.style.minHeight = "40%";
      pAnimEl.style.transitionDuration = "1.5s";
      pAnimEl.classList.remove("collapsed");
      console.log("collapsed");
    }
  });
}
