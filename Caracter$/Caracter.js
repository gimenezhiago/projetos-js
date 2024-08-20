function btn() {
  var area = document.querySelector("#write").value;
  var select = document.querySelector("#select").value;
  var res = document.querySelector("#res");
  var answer = "";

  res.innerHTML = "";
  if (area == "") {
    window.alert("Dados em branco");
  } else {
    switch (select) {
      case "letter":
        answer = area.replace("","").length
        res.innerHTML = answer;
        break;
      case "text":
        answer = area.split("").length;
        res.innerHTML = answer;
        break;
    }
  }
}
