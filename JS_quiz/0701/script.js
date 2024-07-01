const gorenger = document.querySelectorAll(".gorenger li");
for (let i = 0; i < gorenger.length; i++) {
  gorenger[i].addEventListener("click", colorChange(gorenger, gorenger[i]));
}

function colorChange(member, colorMember) {
  return function () {
    for (let j = 0; j < member.length; j++) {
      member[j].style.color = "black";
    }
    colorMember.style.color = colorMember.className;
  };
}
