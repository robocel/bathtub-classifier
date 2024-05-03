import './style.css'
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';


const img = document.getElementById('img');

const model = await mobilenet.load();

const predictions = await model.classify(img);

document.getElementById('app').innerText = JSON.stringify(predictions, null, 4);

console.log(predictions);
