const form = document.getElementById("form-img");
var exibeImagem = document.getElementById("img-selected");
const classificar = document.getElementById("btn-classificar");
var pathImagem;
var imageClassifier;
var formUpload = true;
var btnClassificar = true;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pathImagem = form.elements["img-upload"].value;

  nomeImagem = extrairDadosArquivo(pathImagem);
  imageClassifier =
    "<img src='images/" + nomeImagem + "' id='image' width='400'/>";
  exibeImagem.innerHTML = imageClassifier;

  // classificar.style.display = "inline";
  displayElement(classificar, btnClassificar);
  displayElement(form, !formUpload);

  console.log("pathImagem: ", pathImagem);
});

function extrairDadosArquivo(path) {
  var split = path.split("\\");
  var arquivo = split[split.length - 1];
  return arquivo;
}

function displayElement(element, display) {
  if (display) {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}
