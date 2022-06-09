const getInputToggle = document.querySelector(".theme-toggle");
const getBody = document.querySelector("body");
const getTxtTheme = document.querySelector('.text-theme');

const light = "light";

function controlTheme() {
  if(getInputToggle.checked) {
    getBody.classList.toggle(light);
    getTxtTheme.innerHTML = "Go Dark!"
  }
  else {
    getBody.classList.toggle(light);
    getTxtTheme.innerHTML = "Go Light!"
  }
}

getInputToggle.addEventListener("click", controlTheme);