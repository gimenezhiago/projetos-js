function Contar() {
  var res = document.querySelector("div#res");

  var start = document.querySelector("#start").value;
  var end = document.querySelector("#end").value;
  var pass = document.querySelector("#pass").value;

  if (start.length == 0 || end.length == 0 || pass.length == 0) {
    window.alert("Os dados estão errados [ERRO]");
  } else {
    start = parseFloat(start);
    end = parseFloat(end);
    pass = parseFloat(pass);

    res.innerHTML = "";

    if (pass <= 0) {
        window.alert("O passo não teve algarismo natural, ele passará a ser 1 [Passo == 1]")
        pass = 1
    }

    if (start < end) {
      for (var h = start; h <= end; h += pass) {
        res.innerHTML += `\u{1F449} ${h} `;
      }
    } else if (start > end) {
      for (var h = start; h >= end; h -= pass) {
        res.innerHTML += `\u{1F449} ${h} `;
      }
    }
    res.innerHTML += `\u{1F985}`
  }
}
