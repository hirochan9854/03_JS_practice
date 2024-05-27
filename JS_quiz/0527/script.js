        const takerufuji = {
            "白鷹山": "勝ち",
            "大翔鵬": "勝ち",
            "天空海": "勝ち",
            "英乃海": "勝ち",
            "朝紅龍": "勝ち",
            "紫雷": "勝ち",
            "勇磨": "勝ち",
            "獅司": "勝ち",
            "欧勝海": "勝ち",
            "狼雅": "勝ち",
            "北の若": "負け",
            "輝": "勝ち:負け",
            "天照鵬": "勝ち",
            "千代栄": "勝ち",
            "時疾風": "勝ち"
};
let win = 0
let lose = 0
for (const result in takerufuji) {
    if (takerufuji[result] == "勝ち") {
        win++
    }
    else {
        lose++
    }
}

const ul = document.querySelector(".grades")
const li = document.createElement("li")
li.innerHTML=`三月場所：${win}勝${lose}敗 幕内優勝`
document.querySelector("button").addEventListener("click", function () {
ul.appendChild(li)
})