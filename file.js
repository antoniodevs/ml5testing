form.addEventListener("submit", (event) => {
  event.preventDefault();
  pathImagem = form.elements["img-upload"].value;

  nomeImagem = extrairDadosArquivo(pathImagem);
  imageClassifier =
    "<img src='images/" + nomeImagem + "' id='image' width='400'/>";
  exibeImagem.innerHTML = imageClassifier;

  displayElement(exibeImagem, imgUpload);
  displayElement(classificar, btnClassificar);
  displayElement(btnUploadImage, uploadImage);
  displayElement(modeloML5, exibeModelo);
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
  displayElement(modeloML5, !exibeModelo);
  displayElement(results, !exibeResults);
}

function displayElement(element, display) {
  if (display) {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}
