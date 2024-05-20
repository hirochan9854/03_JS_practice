const iland2 = {
  "I-LAND": [
    "キム・スジョン",
    "ナム・ユジュ",
    "リンリン",
    "マイ",
    "パン・ジミン",
    "ユ・サラン",
    "ユイ",
    "ユン・ジユン",
    "チョン・セビ",
    "チェ・ジョンウン",
    "ココ",
    "フウコ",
  ],
  GROUND: [
    "キム・ギュリ",
    "キム・ミンソル",
    "キム・チェウン",
    "パク・イェウン",
    "ソン・ジュウォン",
    "オム・ジウォン",
    "オ・ユナ",
    "チェ・ソウル",
  ],
  LOSE: ["カン・ジウォン", "キム・ウンチェ", "ナナ", "ユイコ"],
};

const result = document.querySelector(".result");
const Rbtn = document.querySelector(".getRank");

Rbtn.addEventListener("click", function () {
  result.innerHTML = `投票の結果選ばれたのは、${iland2["I-LAND"][3]}です。`;
});

const area = document.querySelector(".member");
const Mbtn = document.querySelector(".getMember");

Mbtn.addEventListener("click", function () {
  area.innerHTML = "";
  for (const member of iland2["I-LAND"]) {
    area.innerHTML += `<li>${member}</li>`;
  }
});
