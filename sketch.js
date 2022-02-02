// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const result = document.getElementById("result");
const probability = document.getElementById("probability");
const result1 = document.getElementById("result1");
const probability1 = document.getElementById("probability1");
const result2 = document.getElementById("result2");
const probability2 = document.getElementById("probability2");
const modelo = document.getElementById("modelo");
var selectModelo;
var valueModelo;

function classificaImagem() {
  displayElement(classificacoes, !exibeClassificacoes);
  displayElement(loading, exibeLoading);
  selectModelo = document.getElementById("select-modelo");
  valueModelo = selectModelo.options[selectModelo.selectedIndex].value;
  const imagem = document.getElementById("image");

  // inicializa a classificação da imagem
  ml5
    .imageClassifier(valueModelo)
    .then((classifier) => classifier.classify(imagem))
    .then((results) => {
      exibeClassificacao(results);
      console.log(results);
    });
  results.style.display = "inline";
}

// realiza a inserção do resultado no html
function exibeClassificacao(resultado) {
  result.innerText = resultado[0].label;
  var percentage = (resultado[0].confidence * 100).toFixed(2) + "%";
  var percentage1 = (resultado[1].confidence * 100).toFixed(2) + "%";
  var percentage2 = (resultado[2].confidence * 100).toFixed(2) + "%";

  probability.innerText = percentage;

  result1.innerText = resultado[1].label;
  probability1.innerText = percentage1;

  result2.innerText = resultado[2].label;
  probability2.innerText = percentage2;

  modelo.innerText = valueModelo;
  displayElement(loading, !exibeLoading);
  displayElement(classificacoes, exibeClassificacoes);
}
