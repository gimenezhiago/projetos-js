var btnadc = document.querySelector("#adc");
btnadc.addEventListener("click", adicionar);

var btnflz = document.querySelector("#flz");
btnflz.addEventListener("click", finalizar);

var number = document.querySelector("#number");
var res = document.querySelector("div#res");

var values = [];

res.innerHTML += "";

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != 1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(number.value) && inList(number.value, values)) {
    
  } else {
    window.alert("Valor inválido ou já encontrado na lista!!!");
  }
}

function finalizar() {
  
}
