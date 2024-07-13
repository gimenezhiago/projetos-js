var agora = new Date();
var date = agora.getDay();
var res = document.querySelector("#res");

switch (date) {
  case 0:
    date = "Domingo";
    break;
  case 1:
    date = "Segunda";
    break;
  case 2:
    date = "Terça";
    break;
  case 3:
    date = "Quarta";
    break;
  case 4:
    date = "Quinta";
    break;
  case 5:
    date = "Sexta";
    break;
  case 6:
    date = "Sábado";
    break;
  default:
    date = "Erro";
    break;
}
res.innerHTML = `O dia é ${date}`;
