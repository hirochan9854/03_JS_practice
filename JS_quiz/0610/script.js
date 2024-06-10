const npb = {
  central: [
    {
      team: "読売ジャイアンツ",
      color: "#F97709",
    },
    {
      team: "広島東洋カープ",
      color: "#FF2B06",
    },
    {
      team: "阪神タイガース",
      color: "#FFE201",
    },
    {
      team: "横浜DeNAベイスターズ",
      color: "#0055A5",
    },
    {
      team: "中日ドラゴンズ",
      color: "#003595",
    },
    {
      team: "東京ヤクルトスワローズ",
      color: "#073170",
    },
  ],
  pacific: [
    {
      team: "福岡ソフトバンクホークス",
      color: "#F5C700",
    },
    {
      team: "北海道日本ハムファイターズ",
      color: "#4C7B98",
    },
    {
      team: "千葉ロッテマリーンズ",
      color: "#221815",
    },
    {
      team: "東北楽天ゴールデンイーグルス",
      color: "#860010",
    },
    {
      team: "オリックス・バファローズ",
      color: "#202040",
    },
    {
      team: "埼玉西武ライオンズ",
      color: "#00215B",
    },
  ],
};

//パーツの取得
const teamArea = document.querySelector(".team");
const leagueBtn = document.querySelectorAll("button");

//各ボタンにclickイベントを設定
for (let i = 0; i < leagueBtn.length; i++) {
  //clickイベント
  leagueBtn[i].addEventListener("click", function () {
    const ulElm = document.createElement("ul");
    teamArea.innerHTML = "";

    //オブジェクトnpbを処理
    //修正はJavaScriptのみです。修正後のここから下を送ってください。
    for (const teams of npb[this.id]) {
      const liElm = document.createElement("li");
      liElm.innerHTML = teams.team;
      ulElm.appendChild(liElm);
      liElm.style.color = teams.color;
    }
    teamArea.insertAdjacentElement("beforeend", ulElm);
  });
}
