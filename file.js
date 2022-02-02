const form = document.getElementById("form-img");
var exibeImagem = document.getElementById("img-selected");
const classificar = document.getElementById("btn-classificar");
var pathimagem;
var imageClassifier;

form.addEventListener("submit", (event) => {
  pathImagem = form.elements["img-upload"].value;
  event.preventDefault();
  nomeImagem = extrairDadosArquivo(pathImagem);
  imageClassifier =
    "<img src='images/" + nomeImagem + "' id='image' width='400'/>";
  exibeImagem.innerHTML = imageClassifier;

  classificar.style.display = "inline";
});

function extrairDadosArquivo(path) {
  var split = path.split("\\");
  var arquivo = split[split.length - 1];
  return arquivo;
}
