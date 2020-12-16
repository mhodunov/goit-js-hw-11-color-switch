//Вводные данные: массив с цветами и рандомайзер
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

//Находим в DOM кнопки Start/Stop и body
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

//ID интервала
let intervalId = null;

//Вешаем слушатель событий на кнопку Start
startButton.addEventListener("click", startChangeColors);

//Функция, которая запускается при клике на кнопку Start
function startChangeColors() {
  changeColors();
  intervalId = setInterval(changeColors, 1000);
  
  /*При клике на кнопку Start, с нее удаляется слушатель событий и нажатия на кнопку больше не вызывают функцию, 
  также вешаем слушатель событий на кнопку Stop*/
  startButton.removeEventListener("click", startChangeColors);
  stopButton.addEventListener("click", stopChangeColors);
  
  /*Альтернативный вариант, при котором кнопка после клика становится неактивной
  startButton.disabled = "true"; 
  stopButton.disabled = "false";*/
}

//Функция, которая вызывается при клике на Stop. Очищается интервал и снова добавляется слушатель событий на Start. С кнопки Stop слушатель удаляется.
function stopChangeColors() {
  clearInterval(intervalId);
  startButton.addEventListener("click", startChangeColors);
  stopButton.removeEventListener("click", stopChangeColors);
  
  /*Альтернативный вариант с отключением кнопок
  startButton.disabled = "false";
  stopButton.disabled = "true"; */
}

//Функция, которая рандомно задает body один из 6 цветов
function changeColors() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}