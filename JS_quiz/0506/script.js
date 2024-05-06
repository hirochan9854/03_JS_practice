const threeKingdoms = [
  {
    name: "魏",
    king: "曹操",
    generals: ["張遼", "司馬懿", "夏侯惇", "郭嘉", "夏侯淵"],
  },
  {
    name: "呉",
    king: "孫堅",
    generals: ["周瑜", "太史慈", "魯粛", "甘寧", "陸遜"],
  },
  {
    name: "蜀",
    king: "劉備",
    generals: ["関羽", "張飛", "趙雲", "諸葛亮", "姜維"],
  },
];

const btn = document.querySelectorAll("button");
const ul = document.querySelector("ul");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    ul.innerHTML = "";
    if (i === 0) {
      for (gen of threeKingdoms[i].generals) {
        const li = document.createElement("li");
        li.innerText = gen;
        ul.appendChild(li);
      }
    } else if (i === 1) {
      for (gen of threeKingdoms[i].generals) {
        const li = document.createElement("li");
        li.innerText = gen;
        ul.appendChild(li);
      }
    } else if (i === 2) {
      for (gen of threeKingdoms[i].generals) {
        const li = document.createElement("li");
        li.innerText = gen;
        ul.appendChild(li);
      }
    }
  });
}
