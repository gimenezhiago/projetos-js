var btn = document.querySelector("#button");
btn.addEventListener("click", Tabuada);

function Tabuada() {
  let number = document.querySelector("#number");
  let tab = document.querySelector("#seltab");
  let fix = 1;

  if (number.lenght != 0) {
    num = parseFloat(number.value);
    tab.innerHTML = "";
    while (fix <= 10) {
      let option = document.createElement("option");
      option.text = `${num} x ${fix} = ${num * fix}`;
      option.value = `tab${fix}`;
      tab.appendChild(option);
      fix++;
    }
  } else {
    window.alert("Digite um número!!!");
  }
}
