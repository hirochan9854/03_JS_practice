const text = document.querySelector("#trident");
const colors = document.querySelectorAll("li");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    if (i === 0) {
      text.classList.remove("colorBlue", "colorOrange");
      text.classList.add("colorRed");
    } else if (i === 1) {
      text.classList.remove("colorRed", "colorOrange");
      text.classList.add("colorBlue");
    } else if (i === 2) {
      text.classList.remove("colorRed", "colorBlue");
      text.classList.add("colorOrange");
    }
  });
}
