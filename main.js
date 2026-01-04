const firstProductCard = document.querySelector('.product-card-container');
const changeFirstCardColorButton = document.querySelector('#change-first-card-color-button');

changeFirstCardColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})



const productCards = document.querySelectorAll('.product-card-container');
const changeAllCardsColorButton  = document.querySelector('#change-all-cards-color-button');
const greenColorHash = '#00FF00'
const blueColorHash = '#0000FF'

changeAllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})



const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}



const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}