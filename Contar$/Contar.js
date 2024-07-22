var btn = document.querySelector("#button");
var res = document.querySelector("#res");

btn.addEventListener("click", Contar);

function Contar() {
  var start = parseFloat(document.querySelector("input#start").value);
  var end = parseFloat(document.querySelector("#end").value);
  var pass = parseFloat(document.querySelector("#pass").value);

  if (start > end || start == "" || end == "" || pass == "") {
    alert("Os dados estão errados [ERRO]");
  } else {

    res.innerHTML = ''

    for (var r = start; r <= end; r += pass) {
      res.innerHTML += `${r}`;
    }
  }
}
