/*
 const demaeicchou = {
    name: "出前一丁",
    soup: "醤油",
    preview: function () {
      const area = document.querySelector("#result");
      area.innerHTML = `${this.name}は、${this.soup}ラーメンです。`;
    },
  };

  demaeicchou.preview();
  demaeicchou.soup = "とんこつ";
  demaeicchou.preview = function () {
    const area = document.querySelector("#result");
    area.innerHTML = `${this.name}は、${this.soup}ラーメンではありません。`;
  };
  delete demaeicchou.name;

  demaeicchou.preview();
*/

class InstantNoodle {
  //静的プロパティ
  static TYPE = "インスタントラーメン";

  //静的メソッド
  static making() {
    return `<p>${InstantNoodle.TYPE}は、鍋で作ります。</p>`;
  }

  //コンストラクタ(構造)
  constructor(ramen, taste) {
    this.name = ramen;
    this.soup = taste;
  }
  descript() {
    return `<p>${this.name}は${this.soup}味です。</p>`;
  }
}
/*
const soltRamen = new InstantNoodle("サッポロ一番塩", "塩");
const demaeicchouN = new InstantNoodle("出前一丁", "醤油");

//   console.log(`${soltRamen.name}は${soltRamen.soup}味です。`);
//   console.log(`${demaeicchouN.name}は${demaeicchouN.soup}味です。`);

console.log(soltRamen.descript(), demaeicchouN.descript());

document.body.insertAdjacentHTML("beforeend", soltRamen.descript());
document.body.insertAdjacentHTML("beforeend", demaeicchouN.descript());
*/

const ramens = [];
ramens.push(new InstantNoodle("サッポロ一番塩", "塩"));
ramens.push(new InstantNoodle("出前一丁", "醤油"));
ramens.push(new InstantNoodle("うまかっちゃん", "とんこつ"));

ramens.forEach((ramen) => {
  document.body.insertAdjacentHTML("beforeend", ramen.descript());
});

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());

class Maker extends InstantNoodle {
  constructor(ramen, taste, company) {
    super(ramen, taste);
    this.maker = company;
  }

  //同じメソッド名で、上書き（オーバーライド）
  descript() {
    return `<p>${this.name} 「${this.soup}」のメーカーは、${this.maker}です。</p>`;
  }
}

ramens.forEach((ramen) => {
  //スーパークラスは変わらず
  document.body.insertAdjacentHTML("beforeend", ramen.descript());
});
const maker = new Maker("マルちゃん正麺", "しょうゆ", "東洋水産");
//サブクラスはオーバーライドされる
document.body.insertAdjacentHTML("beforeend", maker.descript());

console.dir(document.body);
