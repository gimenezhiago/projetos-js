function btn() {
  var area = document.querySelector("#write").value;
  var select = document.querySelector("#select").value;
  var res = document.querySelector("#res");
  
  res.innerHTML = "";
  if (area == "") {
    window.alert("Dados em branco")
  } else {
    switch (select) {
      case "letter":
        for (let i = 0; i <= area.length; i++) {
          var answer = '';
            answer = i
        }
        res.innerHTML = answer;
        break;
      case "text":
        for (let i = 0; i <= area.split("").lenght; i++) {
          let arrayAnswer = []
          arrayAnswer += i
        }
        res.innerHTML = answer
        break;
    }
  }
}
