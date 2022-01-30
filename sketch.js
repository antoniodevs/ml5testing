// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const image = document.getElementById("image");
const modelo = document.getElementById("modelo");
const result = document.getElementById("result");
const probability = document.getElementById("probability");
const result1 = document.getElementById("result1");
const probability1 = document.getElementById("probability1");
const result2 = document.getElementById("result2");
const probability2 = document.getElementById("probability2");

//modelos de classificação de imagem pré-treinados
//1 = MobileNet, 2 = Darknet, 3 = Darknet-tiny, 4 = DoodleNet
const model = defineModelo(4);

// inicializa a classificação da imagem
ml5
  .imageClassifier(model)
  .then((classifier) => classifier.classify(image))
  .then((results) => {
    exibeClassificacao(results);
    console.log(results);
  });

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

  modelo.innerText = model;
}

function defineModelo(id) {
  var model;
  switch (id) {
    case 1:
      model = "MobileNet";
      break;
    case 2:
      model = "Darknet";
      break;
    case 3:
      model = "Darknet-tiny";
      break;
    case 4:
      model = "DoodleNet";
      break;
  }

  return model;
}
