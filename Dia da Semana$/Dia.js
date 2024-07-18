var agora = new Date();
var date = agora.getDay();
var res = document.querySelector("#res");
var gp1 = document.querySelector(".gp1");
var fig = document.querySelector("#fig")
var img = document.querySelector("#picture");
img.style.width = "50vw";
img.style.height = "100vh";

date = 0
switch (date) {
  case 0:
    date = "Domingo";
    img.setAttribute(
      "src",
      "https://i.pinimg.com/originals/d9/05/ab/d905ab5fb06d41de16b89a128a41cedd.jpg"
    );
    gp1.style.background = "#a2d2ff";
    fig.setAttribute("src")
    break;
  case 1:
    date = "Segunda";
    img.setAttribute(
      "src",
      "https://www.topimagens.com.br/img/imgwhats/segunda-feira-419Of2qJUCq8l.jpg"
    );
    gp1.style.background = "";
    break;
  case 2:
    date = "Terça";
    img.setAttribute(
      "src",
      "https://th.bing.com/th/id/R.80689dc08a6ed2062520038db0ee966c?rik=QxGKOb8PpTulRw&riu=http%3a%2f%2fimg1.recadosonline.com%2f284%2f144.jpg&ehk=BV%2fWSA5NXUKKNX2yfvFeae5cMNyWRvuvjZasGwrGRX8%3d&risl=&pid=ImgRaw&r=0"
    );
    gp1.style.background = "";
    break;
  case 3:
    date = "Quarta";
    img.setAttribute(
      "src",
      "https://www.imagensbomdia.net/wp-content/uploads/2019/04/Uma-bela-Quarta-feira-pra-voc%C3%AA-4.jpg"
    );
    gp1.style.background = "";
    break;
  case 4:
    date = "Quinta";
    img.setAttribute(
      "src",
      "https://3.bp.blogspot.com/-gwqjDFU7y3M/WAjbh7_B_1I/AAAAAAACR3M/x8-1ilYUYl4GCpFTlrN4LlSkhecP5Bl0QCK4B/s640/0.jpg"
    );
    gp1.style.background = "";
    break;
  case 5:
    date = "Sexta";
    img.setAttribute(
      "src",
      "https://i.pinimg.com/736x/d7/4f/01/d74f01421b0b0219c3445902eec961fc--vintage-chic-humor.jpg"
    );
    gp1.style.background = "";
    break;
  case 6:
    date = "Sábado";
    img.setAttribute(
      "src",
      "https://1.bp.blogspot.com/-kHl0OgcBcZI/WWAd6P3-cTI/AAAAAAAADl8/rzPVolBn1YwhMfaIPnINBtQEZNOSNlp9QCEwYBhgL/s1600/4f7ba934fe0e824069a19e310be6b361.jpg"
    );
    gp1.style.background = "";
    break;
  default:
    date = "Erro";
    break;
}
res.innerHTML = `O dia é ${date}`;
