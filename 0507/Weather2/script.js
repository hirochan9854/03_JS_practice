//東海4県のコード番号をオブジェクトの配列にしておきます。
const codeNums = [
  { 愛知県: 230000 },
  { 岐阜県: 210000 },
  { 三重県: 240000 },
  { 静岡県: 220000 },
];

//テンプレートリテラルでconst urlに代入します。
const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${codeNums[0]["愛知県"]}.json`;

//fetch()でデータを取得する。
fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (weather) {
      console.log(weather);
      const result = document.querySelector(".target");
      const ulElm = document.createElement("ul");
      for (const key in weather) {
        ulElm.insertAdjacentHTML("beforeend", `<li>${weather[key]}</li>`);
      }
      result.append(ulElm);
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

const weekUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[0]["愛知県"]}.json`;
fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);

      //愛知県西部の天気予報をwest、日付をweatherDateに代入します。
      const west = data[0].timeSeries[0].areas[0];
      const weatherDate = data[0].timeSeries[0].timeDefines;

      //地域<h1>西部</h1>を挿入する。
      const result = document.querySelector(".threeDays");
      result.innerHTML = `<h1>${west.area.name}</h1>`;

      //ulをresultに挿入
      const ulElm = document.createElement("ul");
      result.appendChild(ulElm);

      //今回はfor文で配列をループ（他のループでも可）
      for (let i = 0; i < west.weathers.length; i++) {
        const liElm = document.createElement("li");

        //new Date()で月日を取得します。※月は0から始まるので+1
        liElm.innerHTML = `${
          new Date(weatherDate[i]).getMonth() + 1
        }月${new Date(weatherDate[i]).getDate()}日：${west.weathers[i]}`;

        //liをulに挿入します
        ulElm.appendChild(liElm);
      }
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);
      //東部を挿入します。
      const precipAria = document.querySelector(".precipitation");
      const head1 = document.createElement("h1");
      head1.innerHTML = `${data[0].timeSeries[1].areas[1].area.name}降水率`;
      precipAria.insertAdjacentElement("beforebegin", head1);

      //tableを取得
      const precipTable = document.querySelector(".precipitation table");

      //jsonから時間を取得する
      const timeStamp = data[0].timeSeries[1].timeDefines;
      console.log(timeStamp);

      //jsonから降水確率を取得する
      const pops = data[0].timeSeries[1].areas[1].pops;
      console.log(pops);

      //時間の行を作成
      const trElem1 = document.createElement("tr");

      //今回はfor..of文でループします。
      for (const time of timeStamp) {
        const data = new Date(time);
        const thElm = document.createElement("th");
        //時間を分を2桁にする方法
        thElm.innerHTML = `${data.getHours()}時${data
          .getMinutes()
          .toString()
          .padStart(2, "0")}分`;
        trElem1.appendChild(thElm);
        precipTable.appendChild(trElem1);
      }

      //降水確率の行を作成
      const trElem2 = document.createElement("tr");

      for (const percent of pops) {
        const thElm = document.createElement("th");
        thElm.innerHTML = `${percent}%`;
        trElem2.appendChild(thElm);
        precipTable.appendChild(trElem2);
      }
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });
fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    response.json().then(function (data) {
      const result = document.querySelector(".threeDays");
      const code = data[0].timeSeries[0].areas[0].weatherCodes;

      for (let i = 0; i < code.length; i++) {
        //画像に気象庁のアイコンを読み込み、表示させる。
        const image = document.createElement("img");

        //天気コード内のconst weathercode内のコードを活用
        console.log(weathercode[code[i]][0]);
        const weathericon = weathercode[code[i]][0];
        image.src = `https://www.jma.go.jp/bosai/forecast/img/${weathericon}`;
        result.appendChild(image);
      }
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (data) {
      //気象庁の天気情報jsonから天気コードを取得
      const weekly = data[1].timeSeries[0].areas[0].weatherCodes;

      //予報日を取得
      const weeklyDate = data[1].timeSeries[0].timeDefines;
      //曜日設定用の配列を用意
      const dayarray = [
        "日曜日",
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日",
      ];
      //表示させるDOMを取得
      const seventhArea = document.querySelector(".seventh");
      const tableElm = document.querySelector(".seventh table");
      //h1に愛知県を表示させて、追加する。
      const aichiTitle = document.createElement("h1");
      aichiTitle.innerHTML = `${data[1].timeSeries[0].areas[0].area.name}週間天気`;
      seventhArea.insertBefore(aichiTitle, tableElm);

      //1週間の日数をループさせる
      for (let i = 0; i < weekly.length; i++) {
        console.log(weekly[i], weeklyDate[i]);
        //trは行、tdは列で必要な要素を作成
        const trElm = document.createElement("tr");
        const tdElmData = document.createElement("td");
        const tdElmWeather = document.createElement("td");
        //日数を行に設定
        tdElmData.innerHTML = `${
          new Date(weeklyDate[i]).getMonth() + 1
        }月 ${new Date(weeklyDate[i]).getDate()}日（${
          dayarray[new Date(weeklyDate[i]).getDay()]
        }）`;
        trElm.appendChild(tdElmData);
        //更に天気コードから行に追加
        tdElmWeather.innerHTML = weathercode[weekly[i]][3];
        trElm.appendChild(tdElmWeather);
        //tableに行を追加
        tableElm.appendChild(trElm);
      }
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (data) {
      const code = data[0].timeSeries[0].areas[0].weatherCodes;

      for (let i = 0; i < code.length; i++) {
        //天気コードを取得
        console.log(code[i]);
        //コードの100の位を取得
        let hundredsPlace = code[i].charAt(0);
        //各コードの最初の数字で判定
        if (hundredsPlace === "1") {
          console.log("晴れ");
        } else if (hundredsPlace === "2") {
          console.log("曇り");
        } else if (hundredsPlace === "3") {
          console.log("雨");
        } else {
          console.log("その他");
        }
      }
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });
