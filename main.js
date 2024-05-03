import './style.css'
import * as tf from '@tensorflow/tfjs';
import * as tmmodel from '@teachablemachine/image'

const URL = "https://teachablemachine.withgoogle.com/models/495J5oYd3/";

const model = await tmmodel.load(URL + "model.json", URL + "metadata.json");

const maxPredictions = model.getTotalClasses();

const processImage = async () => {
  const img = document.getElementById('displayImage');
  const predictions = await model.predict(img);
  console.log(predictions)
  let winner;

  if (predictions[0].probability > predictions[1].probability) {
    winner = predictions[0].className;
  } else {
    winner = predictions[1].className;
  }

  document.getElementById('imageInfo').innerText = winner;
}

document.getElementById('imageUpload').addEventListener('change', function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    document.getElementById('displayImage').src = reader.result;
    document.getElementById('imageInfo').textContent = 'Image selected: ' + file.name;
    // Call your function here, for example:
    processImage()
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('displayImage').src = "";
    document.getElementById('imageInfo').textContent = 'No image selected';
  }
});

console.log(predictions);
