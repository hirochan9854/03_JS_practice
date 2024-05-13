const btn = document.querySelector("button");
const Input = document.querySelector("#postal-code");
const dd = document.querySelector("dd");
btn.addEventListener("click", function () {
  let code = Input.value;

  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`).then(
    function (response) {
      console.log(response);
      response.json().then(function (data) {
        const address =
          data["results"][0]["address1"] +
          data["results"][0]["address2"] +
          data["results"][0]["address3"];
        dd.innerHTML = address;
      });
    }
  );
});
