const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

startButton.addEventListener("click", changeColors);

function changeColors() {
  
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  startButton.removeEventListener("click", changeColors);
  stopButton.addEventListener("click", stopChangeColors);
}

function stopChangeColors() {
  
  startButton.addEventListener("click", changeColors);
}