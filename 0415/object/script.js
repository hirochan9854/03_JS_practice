// オブジェクトの定義
const parson = {
  // プロパティ
  name: "", //""は空文字といってデータが何もない文字列を意味しています。
  age: 0, // メソッド
  information: function () {
    return "名前：" + this.name + "\n年齢：" + this.age;
  },
}; // プロパティの値を代入
parson.name = "山田太郎";
parson.age = 18; // 情報の開示
const info = parson.information();
console.log(info);

const dict = { apple: "りんご", banana: "バナナ", orange: "オレンジ" };

console.log(dict.apple);
console.log(dict["apple"]);

//キーの変更
dict.apple = "林檎";
console.log(dict.apple);

//キーの追加
dict.grape = "ぶどう";

//キーの削除
delete dict.orange;

console.log(dict);
