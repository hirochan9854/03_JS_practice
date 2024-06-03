//文字の書き換え
const changeBtn = document.querySelector(".change");
const monthText = document.querySelector(".month");
const currentMonth = new Date().getMonth() + 1 + "月";

changeBtn.addEventListener("click", () => {
  monthText.textContent = currentMonth;
});
//文字の追加
const anniversarys = [
  "6月8日：バイキングの日",
  "6月9日：リサイクルの日",
  "6月12日：恋人の日",
];
const addBtn = document.querySelector(".add");
const result = document.querySelector(".juneAnn");

addBtn.addEventListener("click", () => {
  const ul = document.createElement("ul");
  for (let i = 0; i < anniversarys.length; i++) {
    ul.innerHTML += `<li>${anniversarys[i]}</li>`;
  }
  result.appendChild(ul);
});
