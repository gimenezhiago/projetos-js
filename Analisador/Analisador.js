var btnadc = document.querySelector("#adc");
btnadc.addEventListener("click", adicionar);

var btnflz = document.querySelector("#flz");
btnflz.addEventListener("click", finalizar);

var number = document.querySelector("#number");
var res_one = document.querySelector("div#res-one");
var res_two = document.querySelector("div#res-two");

var values = [];

res_one.innerHTML += "";
res_two.innerHTML += "";

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(number.value) && !inList(number.value, values)) {
    values.push(Number(number.value));
    res_one.innerHTML += `Valor ${number.value} adicionado.<br>`;
  } else {
    window.alert("Valor inválido ou já encontrado na lista!!!");
  }
  number.value = "";
  number.focus();
  res_two.innerHTML = "";
}

function finalizar() {
  if (values.length == 0) {
    window.alert("Adicione um valor antes de finalizar!!!");
    number.value = "";
    number.focus();
  } else {
    var total = values.length;
    var max = values[0];
    var min = values[0];
    var soma = 0;
    for (let pos in values) {
      soma += values[pos];
      if (values[pos] > max) {
        max = values[pos];
      } else if (values[pos] < min) {
        min = values[pos];
      }
    }
    var media = soma / total;
    res_one.innerHTML = "";
    res_one.innerHTML += `Os valores: <b>${values}</b>.<br>`
    res_two.innerHTML += `A lista tem <b>${total}</b> números.<br>`;
    res_two.innerHTML += `O valor máximo da lista é <b>${max}</b>.<br>`;
    res_two.innerHTML += `O valor mínimo da lista é <b>${min}</b>.<br>`;
    res_two.innerHTML += `A soma da lista é <b>${soma}</b>.<br>`;
    res_two.innerHTML += `A média da lista é <b>${media}</b>.<br>`;
  }
}
