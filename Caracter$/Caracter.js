function btn() {
  var area = document.querySelector("#write").value;
  var select = document.querySelector("#select").value;
  var res = document.querySelector("#res");
  var answer = '';
  
  res.innerHTML = "";
  if (area == "") {
    window.alert("Dados em branco")
  } else {
    switch (select) {
      case "letter":
        for (let i = 0; i <= area.length; i++) {
            answer = i
        }
        res.innerHTML = answer;
        break;
      case "text":
        for (let i = 0; i <= area; i++) {
            answer = i
        }
        res.innerHTML = answer;
        break;
    }
  }
}
