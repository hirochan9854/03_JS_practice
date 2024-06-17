const casts = ["山﨑賢人", "吉沢亮", "大沢たかお", "橋本環奈"];
const kingdom = {
  author: "原泰久",
  publisher: "集英社",
  magazine: "週刊ヤングジャンプ",
  firstIssue: "2006年9号",
  volumes: "既刊72巻（2024年5月現在）",
};
const displayBtn = document.querySelector(".display");
const resultBtn = document.querySelector(".result");

//問題1
displayBtn.addEventListener("click", function () {
  const castSpan = document.querySelectorAll(".cast span");
  for (let i = 0; i < casts.length; i++) {
    castSpan[i].textContent = casts[i];
  }
});

//問題2
resultBtn.addEventListener("click", function () {
  document.querySelector(".data").innerHTML = "";
  const ulElm = document.createElement("ul");
  for (key in kingdom) {
    const liElm = document.createElement("li");
    liElm.innerHTML = kingdom[key];
    ulElm.appendChild(liElm);
  }
  document.querySelector(".data").appendChild(ulElm);
});
