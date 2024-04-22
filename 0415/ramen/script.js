//   const demaeicchou = {
//     name: "出前一丁",
//     soup: "醤油",
//     preview: function () {
//       const area = document.querySelector("#result");
//       area.innerHTML = `${this.name}は、${this.soup}ラーメンです。`;
//     },
//   };

//   demaeicchou.preview();
//   demaeicchou.soup = "とんこつ";
//   demaeicchou.preview = function () {
//     const area = document.querySelector("#result");
//     area.innerHTML = `${this.name}は、${this.soup}ラーメンではありません。`;
//   };
//   delete demaeicchou.name;

//   demaeicchou.preview();

class InstantNoodle {
  static TYPE = "インスタントラーメン";
  static making() {
    return `<p>${InstantNoodle.TYPE}は、鍋で作ります。</p>`;
  }
  constructor(ramen, taste) {
    this.name = ramen;
    this.soup = taste;
  }
  descript() {
    return `<p>${this.name}は${this.soup}味です。</p>`;
  }
}
//   const soltRamen = new InstantNoodle("サッポロ一番塩", "塩");
//   const demaeicchouN = new InstantNoodle("出前一丁", "醤油");

//   //   console.log(`${soltRamen.name}は${soltRamen.soup}味です。`);
//   //   console.log(`${demaeicchouN.name}は${demaeicchouN.soup}味です。`);

//   console.log(soltRamen.descript(), demaeicchouN.descript());

//   document.body.insertAdjacentHTML("beforeend", soltRamen.descript());
//   document.body.insertAdjacentHTML("beforeend", demaeicchouN.descript());

const ramens = [];
ramens.push(new InstantNoodle("サッポロ一番塩", "塩"));
ramens.push(new InstantNoodle("出前一丁", "醤油"));
ramens.push(new InstantNoodle("うまかっちゃん", "とんこつ"));

console.log(ramens); //オブジェクトの配列

ramens.forEach((ramen) => {
  document.body.insertAdjacentHTML("beforeend", ramen.descript());
});

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());
console.log(InstantNoodle.TYPE);
