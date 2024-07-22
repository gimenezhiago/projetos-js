var btn = document.querySelector("#button");

btn.addEventListener("click", Contar);

function Contar() {
  var res = document.querySelector("#res");

  var start = parseFloat(document.querySelector("input#start").value);
  var end = parseFloat(document.querySelector("#end").value);
  var pass = parseFloat(document.querySelector("#pass").value);

  if (start.length == 0 || end.length == 0 || pass.length == 0) {
    window.alert("Os dados estão errados [ERRO]");
  } else {
    res.innerHTML = `contando`;

    for (var r = start; r <= end; r += pass) {
      res.innerHTML += `oii ${r}`;
    }
  }
}
