const form = document.getElementById("form-img");
var exibeImagem = document.getElementById("img-selected");
const classificar = document.getElementById("btn-classificar");
const btnUploadImage = document.getElementById("btn-reload");
var pathImagem;
var imageClassifier;
var formUpload = true;
var btnClassificar = true;
var uploadImage = true;
var imgUpload = true;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pathImagem = form.elements["img-upload"].value;

  nomeImagem = extrairDadosArquivo(pathImagem);
  imageClassifier =
    "<img src='images/" + nomeImagem + "' id='image' width='400'/>";
  exibeImagem.innerHTML = imageClassifier;

  // classificar.style.display = "inline";
  displayElement(exibeImagem, imgUpload);
  displayElement(classificar, btnClassificar);
  displayElement(btnUploadImage, uploadImage);
  displayElement(form, !formUpload);
});

function extrairDadosArquivo(path) {
  var split = path.split("\\");
  var arquivo = split[split.length - 1];
  return arquivo;
}

function trocaImagem() {
  form.elements["img-upload"].value = "";
  displayElement(exibeImagem, !imgUpload);
  displayElement(form, formUpload);
  displayElement(classificar, !btnClassificar);
  displayElement(btnUploadImage, !uploadImage);
}

function displayElement(element, display) {
  if (display) {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}
