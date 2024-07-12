var btn = document.querySelector("#btn");
btn.addEventListener("click", verificar);

function verificar() {
  var agora = new Date();
  var yearnow = agora.getFullYear();
  var yearnas = parseFloat(document.querySelector("#yearnas").value);
  var res = document.querySelector("#res");

  var img = document.createElement("img");
  img.setAttribute("id", "picture");
  img.style.width = '200px'
  img.style.height = '200px'
  img.style.borderRadius = '50%'
  img.style.border = '1.5px solid black'

  if (yearnas <= 0 || yearnas > yearnow) {
    window.alert("Dados incosistentes [ERRO]");
  } else {
    var sexf = document.querySelector("#sexf");
    var sexm = document.querySelector("#sexm");
    var conta = yearnow - yearnas;

    if (sexf.checked) {
      var sexo = "Mulher";

      if (conta >= 0 && conta < 12) {
        //criança
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.Ux2x1HM1y8k2q9bHJYZTxgHaFu?w=237&h=183&c=7&r=0&o=5&pid=1.7"
        );
      } else if (conta < 20) {
        //adolecente
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.vmuJTImaqeq3Je8luVT4JQHaE7?w=271&h=180&c=7&r=0&o=5&pid=1.7"
        );
      } else if (conta < 65) {
        //adulto
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.b2qbRqPX_CkNpkXSWuRPlwHaE4?w=289&h=189&c=7&r=0&o=5&pid=1.7"
        );
      } else if (conta >= 65) {
        //idoso
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.5SHpEAAfC7vL-qSZ06mYYQHaE7?w=277&h=185&c=7&r=0&o=5&pid=1.7"
        );
      }
    } else if (sexm.checked) {
      var sexo = "Homem";

      if (conta >= 0 && conta < 12) {
        //criança
        img.setAttribute(
          "src",
          "https://th.bing.com/th?id=OIP.-RTCTlSjbqlqcXON7FZJlQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        );
      } else if (conta < 20) {
        //adolecente
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.krH7kkF-ddLdgzEVT83NDQHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7"
        );
      } else if (conta < 65) {
        //adulto
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.WQgYYQSEumgJSivndfnRVQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7"
        );
      } else if (conta >= 65) {
        //idoso
        img.setAttribute(
          "src",
          "https://th.bing.com/th/id/OIP.-dnjWaxeRyCLGRMr21bqqQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"
        );
      }
    }

    var name = document.querySelector("#name").value;
    if (name == '') {
        window.alert("Dados incosistentes [ERRO]");
    }
    res.innerHTML = `O(a) ${name} é um(a) ${sexo} e tem ${conta} anos`;
    res.appendChild(img)
  }
}
