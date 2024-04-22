// story:話, title:題名, image:サムネイル名, id:YouTube動画id
const chiikawas = [
  {
    story: 1,
    title: "かためのプリン／ホットケーキ",
    image: "chiikawa-001.webp",
    id: "pbQQAwSQUX4",
  },
  {
    story: 2,
    title: "スフィンクス／ほんものだ",
    image: "chiikawa-002.webp",
    id: "i6d3K6ln-d4",
  },
  {
    story: 3,
    title: "イカ／パイシチュー",
    image: "chiikawa-003.webp",
    id: "a7cwqxmn7rY",
  },
  {
    story: 4,
    title: "ブロッコリー／ピザまん",
    image: "chiikawa-004.webp",
    id: "l9IAr7WY-Xk",
  },
  {
    story: 5,
    title: "チャリメラ／チャルメラ",
    image: "chiikawa-005.webp",
    id: "cE8wVmwY7VY",
  },
];

// ここに記述していきます。
class Chiikawa {
  constructor(story, title, image, id) {
    this.story = story;
    this.title = title;
    this.image = image;
    this.id = id;
  }

  descript() {
    return `
          <dl>
          <dt><span>第${this.story}話</span>${this.title}</dt>
          <dd>
            <a href="https://www.youtube.com/watch?v=${this.id}">
              <img src="./images/${this.image}" alt="${this.title}" />
            </a>
          </dd>
        </dl>`;
  }
}
chiikawas.forEach((chiiikawaStorys) => {
  const newStory = new Chiikawa(
    chiiikawaStorys.story,
    chiiikawaStorys.title,
    chiiikawaStorys.image,
    chiiikawaStorys.id
  );
  document
    .querySelector(".contents")
    .insertAdjacentHTML("beforeend", newStory.descript());
});
