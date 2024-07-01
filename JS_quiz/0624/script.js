//全てのJavaScriptコードを送ってください。
const plane = document.querySelector(".airPlane");
const player = document.querySelector(".player");

player.addEventListener("click", function () {
  if (plane.classList.contains("move") === false) {
    plane.classList.toggle("move");
    plane.classList.toggle("inversion");
    player.classList.toggle("inversion");
  } else {
    plane.classList.toggle("move");
    plane.classList.toggle("inversion");
    player.classList.toggle("inversion");
  }
});
