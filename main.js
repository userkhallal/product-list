// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card-container');
const firstCardChangeColorButton = document.querySelector('#change-first-card-color-button');

firstCardChangeColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})


// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card-container');
const allCardsChangeColorButton  = document.querySelector('#change-all-cards-color-button');
const greenColorHash = '#00FF00'
const blueColorHash = '#0000FF'
const orangeColorHash = '#FFA500'

allCardsChangeColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Открыть Google

const buttonOpenGoogle = document.querySelector('#open-google');

buttonOpenGoogle.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer) {
    window.open('https://google.com')
  } else {
    return;
  }
}


// Вывод консоль лог

const buttonOutputLog = document.querySelector('#output-console-log');

buttonOutputLog.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}


// Вывод в консоль заголовка

const titleOutputConsole = document.querySelector('.title');

titleOutputConsole.addEventListener('mouseover', () => {
  console.log(titleOutputConsole.textContent)
})


// Смена цветов карточки одной кнопкой

const secondProductCard = productCards[1];
const secondCardToggleColor = document.querySelector('#change-second-card-color-button');

if (secondCardToggleColor && secondProductCard) {
  secondCardToggleColor.addEventListener('click', () => {
    secondProductCard.classList.toggle('is-highlighted')
  })
}