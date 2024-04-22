const input = document.querySelectorAll("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  result.innerHTML = "";

  const ul = document.createElement("ul");
  for (let i = 0; i < input.length; i++) {
    const li = document.createElement("li");
    li.innerText = input[i].value;
    ul.appendChild(li);
  }
  result.appendChild(ul);
});
